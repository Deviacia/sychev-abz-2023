import React from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {createUser} from '../../api/createUser';
import {fetchPositions} from '../../api/fetchPositions';
import {fetchToken} from '../../api/fetchToken';
import {
  Button,
  Radio,
} from '../../components/UI';
import {emailReg, phoneReg} from './FormReg';
import styles from './POST.module.scss';
import successImg from '../../assets/success-image.svg';

const POST = () => {
  const queryClient = useQueryClient();

  const token = useQuery({
    queryKey: ['token'],
    queryFn: () => fetchToken(),
  });

  const {data, isSuccess} = useQuery({
    queryKey: ['positions'],
    queryFn: () => fetchPositions(),
  });

  const mutation = useMutation({
    mutationKey: ['create'],
    mutationFn: (user) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']});
      queryClient.resetQueries({queryKey: ['users']});
    },
  });

  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitted},
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id);
    formData.append('photo', data.photo[0]);

    if (isSubmitted) {
      reset();
    }

    mutation.mutate({
      data: formData,
      token: token.data,
    });
  };

  return (
    <div className={styles.post}>
      <h1>Working with POST request</h1>

      {mutation.isSuccess ? <img src={successImg} alt='success'/> : <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <fieldset className={styles.inputs}>
          <input
            className='textarea'
            placeholder='Your name'
            type={'text'}
            {...register('name', {required: true, maxLength: 60})}
          />

          <input
            className='textarea'
            placeholder='Email'
            type="email"
            {...register('email', {
              required: true, maxLength: 100, pattern: emailReg,
            })}
          />

          <input
            className='textarea'
            placeholder='Phone'
            type="tel"
            {...register('phone', {required: true, pattern: phoneReg})}
          />
        </fieldset>

        <fieldset className={styles.radio}>
          {isSuccess ?
          data.positions.map((position) => (
            <Radio
              key={position.id}
              id={position.name}
              label={position.name}
              value={position.id}
              errors={errors.position_id}
              {...register('position_id', {required: true, minLength: 1})}
            />
          )) : null}
        </fieldset>

        <input
          type='file'
          accept='image/jpeg, image/jpg'
          {...register('photo', {
            required: true,
          })}
        />

        <Button
          type='submit'
          disabled={!isValid}
        >
          Sign up
        </Button>
      </form>}

    </div>
  );
};

export default POST;

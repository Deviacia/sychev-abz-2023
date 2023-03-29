import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

const TextField = forwardRef(function TextField({type, errors, ...props}, ref) {
  console.log(errors);
  return (
    <>
      <input
        ref={ref}
        type={type || 'text'}
        {...props}
      />
      {errors && <span>{errors.message}</span>}
    </>
  );
});

TextField.propTypes = {
  type: PropTypes.string,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

export default TextField;

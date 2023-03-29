import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styles from './radio.module.scss';

const Radio = forwardRef(function Radio({id, name, label, ...props}, ref) {
  return (
    <div className={styles.container}>
      <input
        ref={ref}
        id={id}
        name={name}
        type='radio'
        className={styles.radio}
        {...props}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
    </div>
  );
});

Radio.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Radio;

import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  return (
    <input />
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

export default Input;

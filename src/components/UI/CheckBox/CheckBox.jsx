import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = React.forwardRef(function CheckBox({id, label}, ref) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        ref={ref}
        type="checkbox"
      />
    </label>
  );
});

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};

export default CheckBox;

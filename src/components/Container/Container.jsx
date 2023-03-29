import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({children, className}) => {
  return (
    <div className={
      [styles.container, className].join(' ')}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;

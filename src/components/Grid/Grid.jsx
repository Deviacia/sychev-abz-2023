import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

const Grid = ({children, ...props}) => {
  return (
    <div className={styles.grid} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;

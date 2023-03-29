import React from 'react';
import PropTypes from 'prop-types';
import styles from './Preloader.module.scss';
import Spinner from './Spinner';

const Preloader = ({height}) => {
  return (
    <div
      style={{height: `${height}`}}
      className={styles.preloader}
    >
      <div className={styles.spinner}>
        <Spinner />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  height: PropTypes.number,
};

export default Preloader;

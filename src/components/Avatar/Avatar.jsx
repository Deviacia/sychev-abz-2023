import React, {useState} from 'react';
import PropTypes from 'prop-types';
import fallback from '../../assets/avatar.svg';
import styles from './Avatar.module.scss';

const Avatar = ({src, alt, width, height, ...props}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => setImgSrc(fallback);

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={onError}
      className={styles.avatar}
      {...props}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Avatar;

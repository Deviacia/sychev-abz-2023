import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Tooltip from '../UI/Tooltip/Tooltip';
import styles from './Card.module.scss';

const Card = ({photo, name, position, email, phone}) => {
  return (
    <div className={styles.card} direction={'column'}>
      <Avatar
        src={photo}
        alt={'avatar'}
        width={70}
        height={70}
      />
      <Tooltip text={name}>
        <p className={styles.text}>{name}</p>
      </Tooltip>

      <div className={styles.info}>
        <Tooltip text={position}>
          <p className={styles.text}>{position}</p>
        </Tooltip>
        <Tooltip text={email}>
          <p className={styles.text}>{email}</p>
        </Tooltip>
        <Tooltip text={phone}>
          <p className={styles.text}>{phone}</p>
        </Tooltip>
      </div>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default Card;

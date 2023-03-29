import React from 'react';
import Grid from '../Grid/Grid';
import styles from './Card.module.scss';

const CardFallBack = () => {
  return (
    <Grid>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className={[styles.card, styles.card_fallback].join(' ')}
        />
      ))}
    </Grid>
  );
};

export default CardFallBack;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Container from '../Container/Container';
import Button from '../UI/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.hero__heading}>
              Test assignment for front-end developer
          </h1>
          <p className={styles.hero__text}>
                What defines a good front-end developer
                is one that has skilled knowledge of HTML, CSS, JS
                with a vast understanding of User design thinking
                as they'll be building web interfaces
                with accessibility in mind.
                They should also be excited to learn,
                as the world of Front-End Development keeps evolving.
          </p>
          <Button>Sign up</Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;

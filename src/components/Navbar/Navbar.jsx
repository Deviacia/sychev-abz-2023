import React from 'react';
import Container from '../Container/Container';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <img src={logo} alt="logo" />
        <ul className={styles.list}>
          <Button>Users</Button>
          <Button>Sign Up</Button>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import GET from '../../modules/GET/GET';
import POST from '../../modules/POST/POST';

const Home = () => {
  return (
    <>
      <Header/>
      <Container>
        <GET/>
        <POST/>
      </Container>
    </>
  );
};

export default Home;

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

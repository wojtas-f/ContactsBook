import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Container>
      <div>Header</div>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

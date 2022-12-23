import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

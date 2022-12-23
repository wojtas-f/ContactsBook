import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

const Contact = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image rounded />
        </Col>
        <Col>
          <p>{`${user.name.first} ${user.name.last}`}</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Contact;

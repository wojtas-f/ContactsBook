import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

import Layout from '../components/Layout';

const Error = () => {
  const error = useRouteError();
  return (
    <Layout>
      <Row>
        <Col>
          <h1>404 Page not found</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Error;

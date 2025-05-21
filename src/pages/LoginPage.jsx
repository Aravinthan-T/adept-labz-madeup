import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted");
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-light"
    >
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }}>
          <Card className="p-4 shadow-sm">
            <div className="text-center mb-4">
              <img alt="Logo" height="50" />
              <h3 className="mt-3">Welcome Back</h3>
              <p className="text-muted">Please login to continue</p>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Login
              </Button>
            </Form>
            <div className="text-center mt-3">
              <small className="text-muted">Forgot password?</small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

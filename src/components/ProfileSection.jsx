import { Form, Row, Col } from "react-bootstrap";

const ProfileSection = () => {
  return (
    <div className="px-2 mb-3">
      <div className="section-content px-3 py-3 bg-white">
        <Form className="profile-form">
          <Row className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Phone number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Row className="mb-3">
            <Col></Col>
            <Col>
              <button className="btn btn-primary submit-btn">
                SAVE CHANGES
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ProfileSection;

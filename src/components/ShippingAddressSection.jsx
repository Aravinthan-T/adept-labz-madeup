import { Col, Form, Row } from "react-bootstrap";

const ShippingAddressSection = () => {
  return (
    <div className="px-2 mb-3">
      <div className="section-content px-3 py-3 bg-white">
        <Form className="profile-form">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Address Line 1" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Address Line 2" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="State/ Province" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Zip/ Postal Code" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Country" />
          </Form.Group>
          <Row>
            <Col></Col>
            <Col>
              <button className="btn btn-primary submit-btn">
                ADD ADDRESS
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddressSection;

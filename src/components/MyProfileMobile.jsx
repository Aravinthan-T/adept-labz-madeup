import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProfileImg from "../assets/images/myProfile.png";
import MyOrder from "../assets/images/MyOrder.png";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const MyProfileMobile = () => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const Section = ({ label, sectionKey, shortDesc, children }) => {
    const isOpen = openSection === sectionKey;

    return (
      <div className="section-wrapper px-2">
        <div
          className="section-header px-3 pt-3 pb-1"
          onClick={() => toggleSection(sectionKey)}
        >
          <div className="section-title">
            <span>{label}</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <small className="section-desc">{shortDesc}</small>
        </div>
        {isOpen && <div className="section-content mx-3">{children}</div>}
      </div>
    );
  };

  return (
    <Container className="my-profile-mobile py-4">
      <Row className="align-items-center profile-header">
        <Col xs={3} className="d-flex justify-content-end">
          <img src={ProfileImg} alt="Profile" className="profile-img" />
        </Col>
        <Col xs={9}>
          <div className="profile-info">John Doe</div>
          <div className="email">johndoe@example.com</div>
        </Col>
      </Row>

      <div className="pt-3">
        <Section
          label="My Profile"
          sectionKey="profile"
          shortDesc="Notification, Password"
        >
          <Form className="profile-form">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
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
            <button className="btn btn-primary submit-btn">SAVE CHANGES</button>
          </Form>
        </Section>

        <Section
          label="My Orders"
          sectionKey="orders"
          shortDesc="Already have 12 orders"
        >
          <div className="d-flex fw-bold">Pending Orders</div>
          <div className="py-2">
            <div className="pt-2">
              <Row className="mb-2 align-items-center">
                <Col xs={4} className="d-flex justify-content-center">
                  <div>
                    <img
                      src={MyOrder}
                      alt="Order"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col xs={7} className="order-details">
                  <Row className="mb-2">
                    <Col xs={6}>
                      <div className="text-nowrap">Order #12345678</div>
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex justify-content-end">
                        COD <span className="fw-bold"> $1,999</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>
                      <div className="fw-bold product-desc">
                        Madeup White Cotton Blend Checkered Slim Fit Shirt
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>Express Delivery by Sat, Aug 31</div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={1}
                  className="d-flex align-items-center justify-content-center fw-bold"
                >
                  <FaChevronRight />
                </Col>
              </Row>
            </div>
            <div className="border-line-wrapper">
              <div className="d-flex justify-content-end">
                <div className="pending py-1 px-3">Pending</div>
              </div>
              <div className="border-bottom "></div>
            </div>
          </div>
          <div className="py-2">
            <div className="pt-2">
              <Row className="mb-2 align-items-center">
                <Col xs={4} className="d-flex justify-content-center">
                  <div>
                    <img
                      src={MyOrder}
                      alt="Order"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col xs={7} className="order-details">
                  <Row className="mb-2">
                    <Col xs={6}>
                      <div className="text-nowrap">Order #12345678</div>
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex justify-content-end">
                        COD <span className="fw-bold"> $1,999</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>
                      <div className="fw-bold product-desc">
                        Madeup White Cotton Blend Checkered Slim Fit Shirt
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>Express Delivery by Sun, Aug 31</div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={1}
                  className="d-flex align-items-center justify-content-center fw-bold"
                >
                  <FaChevronRight />
                </Col>
              </Row>
            </div>
            <div className="border-line-wrapper">
              <div className="d-flex justify-content-end">
                <div className="pending py-1 px-3">Pending</div>
              </div>
              <div className="border-bottom "></div>
            </div>
          </div>
          <div className="py-2">
            <div className="pt-2">
              <Row className="mb-2 align-items-center">
                <Col xs={4} className="d-flex justify-content-center">
                  <div>
                    <img
                      src={MyOrder}
                      alt="Order"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col xs={7} className="order-details">
                  <Row className="mb-2">
                    <Col xs={6}>
                      <div className="text-nowrap">Order #12345678</div>
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex justify-content-end">
                        COD <span className="fw-bold"> $1,999</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>
                      <div className="fw-bold product-desc">
                        Madeup White Cotton Blend Checkered Slim Fit Shirt
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>Express Delivery by Sun, Aug 15</div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={1}
                  className="d-flex align-items-center justify-content-center fw-bold"
                >
                  <FaChevronRight />
                </Col>
              </Row>
            </div>
            <div className="border-line-wrapper">
              <div className="d-flex justify-content-end">
                <div className="pending-2 py-1 px-3">Pending</div>
              </div>
              <div className="border-bottom "></div>
            </div>
          </div>
          <div className="py-2">
            <div className="pt-2">
              <Row className="mb-2 align-items-center">
                <Col xs={4} className="d-flex justify-content-center">
                  <div>
                    <img
                      src={MyOrder}
                      alt="Order"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col xs={7} className="order-details">
                  <Row className="mb-2">
                    <Col xs={6}>
                      <div className="text-nowrap">Order #12345678</div>
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex justify-content-end">
                        COD <span className="fw-bold"> $1,999</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>
                      <div className="fw-bold product-desc">
                        Madeup White Cotton Blend Checkered Slim Fit Shirt
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>Express Delivery by Sat, Aug 15</div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={1}
                  className="d-flex align-items-center justify-content-center fw-bold"
                >
                  <FaChevronRight />
                </Col>
              </Row>
            </div>
            <div className="border-line-wrapper">
              <div className="d-flex justify-content-end">
                <div className="pending-2 py-1 px-3">Pending</div>
              </div>
              <div className="border-bottom"></div>
            </div>
          </div>
        </Section>

        <Section
          label="Shipping Address"
          sectionKey="shipping"
          shortDesc="3 addresses"
        >
          <Form className="profile-form">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address Line 1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address Line 2" />
            </Form.Group>
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
            <button className="btn btn-primary submit-btn">ADD ADDRESS</button>
          </Form>
        </Section>
      </div>
    </Container>
  );
};

export default MyProfileMobile;

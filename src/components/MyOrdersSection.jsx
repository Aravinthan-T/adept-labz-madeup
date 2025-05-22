import { Col, Row } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import MyOrder from "../assets/images/MyOrder.png";

const MyOrdersSection = () => {
  return (
    <>
      <div className="px-4">
        <div className="py-2">
          <div className="pt-2 mx-3">
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
                <FaChevronDown />
              </Col>
            </Row>
          </div>
          <div className="border-line-wrapper">
            <div className="d-flex justify-content-end">
              <div className="pending py-1 px-3">Pending</div>
            </div>
            <div className="border-bottom px-3 "></div>
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
                <FaChevronDown />
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
                <FaChevronDown />
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
                <FaChevronDown />
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
      </div>
    </>
  );
};

export default MyOrdersSection;

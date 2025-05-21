// src/components/Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Youtube from "../assets/images/Youtube.png";
import MadeUp from "../assets/images/MadeUp.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="px-3 px-md-5 py-4 footer-text text-center text-md-start">
          {/* Left Column */}
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-start my-3 mb-md-0"
          >
            <div>
              <div className="pb-3">About Us</div>
              <div className="pb-3">Delivery Information</div>
              <div className="pb-3">Return & Exchange</div>
              <div className="pb-3">Technical & Privacy</div>
              <div className="pb-3">Order Status</div>
            </div>
          </Col>

          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center my-3 mb-md-0"
          >
            <img src={MadeUp} alt="Logo" className="img-fluid mb-2" />

            <div className="py-3 pt-4 fw-semibold">Stay in touch with us</div>

            <div className="d-flex gap-4 justify-content-center mt-2">
              <img src={Facebook} alt="Facebook" className="img-fluid" />
              <img src={Instagram} alt="Instagram" className="img-fluid" />
              <img src={Youtube} alt="YouTube" className="img-fluid" />
            </div>
          </Col>

          {/* Right Column */}
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-end my-3"
          >
            <div>
              <div className="fw-semibold text-md-start text-center">
                Our Corporate Office
              </div>
              <div className="pt-2 text-md-start text-center">
                No: 7, A2B road, Adayar Rajpuram,
                <br />
                T-Nagar, Chennai - 642002.
              </div>

              <div className="pt-3 text-md-start text-center">
                <div className="pt-2">
                  <MdOutlineEmail />
                  <span className="ps-2">sales@madeup.com</span>
                </div>
                <div className="pt-1">
                  <IoCallOutline />
                  <span className="ps-2">044 9999 9999</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

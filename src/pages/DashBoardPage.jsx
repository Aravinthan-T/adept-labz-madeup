import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LandingPageImage1 from "../assets/images/LandingPageImage1.png";
import LandingPageImageMobile from "../assets/images/LandingPageImageMob.png";
import LPImage2 from "../assets/images/LPImage2.png";
import LPImage3 from "../assets/images/LPImage3.png";
import LPImage4 from "../assets/images/LPImage4.png";
import { products, testimonials } from "../constants/Products";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import ProfileImg from "../assets/images/myProfile.png";

const DashboardPage = () => {
  const scrollContent = (amount) => {
    document
      .getElementById("scrollContent")
      ?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const categories = [
    { img: ProfileImg, label: "Jeans" },
    { img: ProfileImg, label: "Shirts" },
    { img: ProfileImg, label: "Shoes" },
    { img: ProfileImg, label: "Jackets" },
    { img: ProfileImg, label: "T-Shirts" },
    { img: ProfileImg, label: "Shorts" },
  ];
  return (
    <Container fluid className="p-0">
      <div className="d-block d-lg-none">
        <div className="scroll-label-wrapper">
          <div className="scroll-arrow" onClick={() => scrollContent(-100)}>
            <FaChevronLeft />
          </div>

          <div className="scrollable-labels" id="scrollContent">
            {categories.map((cat, index) => (
              <div className="label-item" key={index}>
                <img src={cat.img} alt={cat.label} className="category-img" />
                <div>{cat.label}</div>
              </div>
            ))}
          </div>

          <div className="scroll-arrow" onClick={() => scrollContent(100)}>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <Row>
        <div className="image-wrapper">
          <img
            src={LandingPageImage1}
            alt="Landing"
            className="img-fluid w-100 d-none d-sm-block"
          />

          <img
            src={LandingPageImageMobile}
            alt="Landing Mobile"
            className="img-fluid w-100 d-block d-sm-none"
          />

          <div className="overlay-content">
            <div className="text-highlight first-line">
              Clothes that <span className="highlight-word">respire</span>
            </div>
            <div className="text-highlight second-line">
              for men who <span className="highlight-word">aspire</span>
            </div>
            <div className="text-highlight-red browse-cta cursor-pointer">
              Browse Collections
            </div>
          </div>
        </div>
      </Row>

      <Row className="mt-1 g-2 align-items-stretch">
        {/* Left side - one image */}
        <Col
          md={6}
          sm={12}
          className="position-relative d-flex align-items-center"
        >
          <img
            src={LPImage2}
            alt="Landing Left"
            className="img-fluid w-100 h-100 object-fit-cover"
          />

          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <div className="text-highlight first-line">
              <span className="highlight-word">Summer</span> is here and
            </div>
            <div className="text-highlight browse-cta">
              so is our <span className="highlight-word">collection</span>
            </div>
          </div>
        </Col>

        {/* Right side - two stacked images */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-between gap-2"
        >
          {/* Top Right Image Block */}
          <div className="position-relative w-100" style={{ height: "50%" }}>
            <img
              src={LPImage3}
              alt="Top Right"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center overlay-content">
              <div className="text-highlight first-line">
                <span className="highlight-word">Wrinkle-free</span> t-shirts
              </div>
            </div>
          </div>

          {/* Bottom Right Image Block */}
          <div className="position-relative w-100" style={{ height: "50%" }}>
            <img
              src={LPImage4}
              alt="Bottom Right"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center overlay-content">
              <div className="text-highlight first-line">
                <span className="highlight-word">Stain-free</span> denim shirts
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mx-4 mx-sm-2 my-4">
        <Col>
          <div className="section-divider text-center">
            <span className="section-title">LATEST COLLECTIONS</span>
          </div>
        </Col>
      </Row>

      <div className="product-scroll-container mx-4">
        <Row className="text-center g-2 py-2 px-3 flex-nowrap flex-md-wrap">
          {products.map((product, idx) => (
            <Col key={idx} xs={6} sm={4} md={2} className="flex-shrink-0">
              <div className="product-card h-100 d-flex flex-column align-items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mb-3"
                  style={{ objectFit: "cover" }}
                />
                <div className="fw-bold">{product.name}</div>
                <div className="text-muted">{product.price}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Row className="px-4 px-sm-2 mt-3 testimonial-div">
        <Col>
          <div className="text-center">
            <span className="section-title">TESTIMONIALS</span>
          </div>
        </Col>
      </Row>
      <Row className="testimonial-row px-5 px-lg-2 testimonial-div py-5">
        {testimonials.map((t, idx) => (
          <Col key={idx} md={3} sm={6}>
            <div className="testimonial-card p-3 my-3 bg-white position-relative">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle testimonial-img"
              />
              <div className="mt-4">
                <div className="px-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5 className="fw-semibold mb-0 px-2">{t.name}</h5>
                    <span style={{ color: "#FFD700", fontSize: "16px" }}>
                      ★★★★☆
                    </span>
                  </div>
                </div>
                <p className="mb-0 feedback px-3 py-2">{t.feedback}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="d-flex flex-column align-items-center text-center p-3 my-3">
        <Col xs={12}>
          <div className="newsletter py-2 fw-semibold fs-5">
            GET COUPONS & STYLE GUIDES
          </div>
          <div className="py-4">Subscribe to our Newsletter</div>

          <Form>
            <Row className="g-2 justify-content-center px-4">
              {/* Input Field */}
              <Col xs={12} sm="auto" className="d-flex justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ width: "100%", maxWidth: "400px" }}
                />
              </Col>

              {/* Subscribe Div */}
              <Col
                xs={12}
                sm="auto"
                className="d-flex justify-content-center subscribe"
              >
                <div className="subscribe py-2 px-4 text-center">SUBSCRIBE</div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center pt-4">
        <Col
          xs="auto"
          className="d-flex justify-content-center justify-content-md-end"
        >
          <div className="locateus-newsletter d-flex align-items-center text-center px-4 py-2 me-md-5">
            <FaLocationDot />
            <span className="ps-2">LOCATE US</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

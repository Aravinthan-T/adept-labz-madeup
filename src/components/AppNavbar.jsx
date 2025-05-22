import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MadeUp from "../assets/images/MadeUp.png";
import { dashboard, myProfile } from "../constants/routes";

const AppNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);
  const handleCloseMenu = () => setShowMobileMenu(false);

  const handleNavigation = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center mx-5"
      >
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={MadeUp}
            alt="MadeUp Logo"
            width={40}
            height={40}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {!isLoginPage && (
          <Nav className="d-none d-lg-flex justify-content-center gap-4">
            <Nav.Link as={NavLink}>For Me</Nav.Link>
            <Nav.Link as={NavLink}>Jeans</Nav.Link>
            <Nav.Link as={NavLink}>Shirts</Nav.Link>
            <Nav.Link as={NavLink}>T-Shirts</Nav.Link>
            <Nav.Link as={NavLink}>Trousers</Nav.Link>
            <Nav.Link as={NavLink}>Joggers</Nav.Link>
            <Nav.Link as={NavLink}>Shorts</Nav.Link>
          </Nav>
        )}

        {!isLoginPage && (
          <>
            <div className="d-none d-lg-flex gap-4 align-items-center">
              <IoSearch className="react-icons" />
              <MdOutlineShoppingCart className="react-icons" />
              <CgProfile
                className="react-icons"
                onClick={() => navigate(myProfile)}
              />
            </div>

            <div className="d-flex d-lg-none">
              <HiOutlineMenuAlt3
                size={28}
                className="react-icons"
                onClick={handleToggleMenu}
                role="button"
              />
            </div>
          </>
        )}
      </Container>

      <Offcanvas show={showMobileMenu} onHide={handleCloseMenu} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="gap-4 my-5 user-section">
            <ListGroup.Item
              action
              onClick={() => handleNavigation(myProfile)}
              style={{ color: "red" }}
            >
              MY PROFILE
            </ListGroup.Item>
            <ListGroup.Item>MY ORDERS</ListGroup.Item>
            <ListGroup.Item>MY SHIPPING ADDRESS</ListGroup.Item>
          </ListGroup>
          <div className="border-bottom mx-4"></div>
          <ListGroup variant="flush" className="gap-4 mt-5 user-section">
            <ListGroup.Item
              action
              onClick={() => handleNavigation(myProfile)}
              style={{ color: "red" }}
            >
              THE BRAND
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigation("/orders")}>
              THE MADEUP STORY
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigation("/cart")}>
              FRANCHISE AND SUPPLIEDS
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigation("/search")}>
              STORE LOCATOR
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;

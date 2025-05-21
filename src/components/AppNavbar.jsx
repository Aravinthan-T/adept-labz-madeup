import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import MadeUp from "../assets/images/MadeUp.png";
import { dashboard, myProfile } from "../constants/routes";

const AppNavbar = () => {
  const navigate = useNavigate();

  const handleMyProfile = () => {
    navigate(myProfile);
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

        <Nav className="d-flex justify-content-center gap-4">
          <Nav.Link
            as={NavLink}
            to={dashboard}
            className="d-none d-lg-block d-xl-block for-me"
          >
            For Me
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            Jeans
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            Shirts
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            T-Shirts
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            Trousers
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            Joggers
          </Nav.Link>
          <Nav.Link as={NavLink} className="d-none d-lg-block d-xl-block">
            Shorts
          </Nav.Link>
        </Nav>

        <div className="d-flex gap-4 align-items-center">
          <IoSearch className="react-icons" />
          <MdOutlineShoppingCart className="react-icons" />
          <CgProfile className="react-icons" onClick={handleMyProfile} />
        </div>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

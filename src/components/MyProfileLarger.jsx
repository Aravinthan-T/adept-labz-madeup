import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileImg from "../assets/images/myProfile.png";
import ProfileSection from "./ProfileSection";
import ShippingAddressSection from "./ShippingAddressSection";
import MyOrdersSection from "./MyOrdersSection";

const sections = [
  {
    key: "My Profile",
    title: "My Profile",
    desc: "Notification, Password",
  },
  {
    key: "My Orders",
    title: "My Orders",
    desc: "Your past purchases",
  },
  {
    key: "Shipping Address",
    title: "Shipping Address",
    desc: "Manage your addresses",
  },
];

const MyProfileLarger = () => {
  const [selectedSection, setSelectedSection] = useState("My Profile");
  const [open, setOpen] = useState(true);

  const SectionHeader = ({ title }) => (
    <div className="px-3 pt-3 pb-1 d-flex justify-content-between align-items-start">
      <div>
        <div className="fw-bold p-2 section-header-larger">{title}</div>
      </div>
    </div>
  );

  const SectionContent = () => {
    switch (selectedSection) {
      case "My Profile":
        return <ProfileSection />;
      case "My Orders":
        return <MyOrdersSection />;
      case "Shipping Address":
        return <ShippingAddressSection />;
      default:
        return <div className="p-3">Select a section</div>;
    }
  };

  return (
    <div className="container-fluid mt-4 mx-2">
      <Row>
        <Col md={3} className="sidebar-column ps-2 pe-0">
          <div className="pb-4">
            <Row className="flex-nowrap align-items-center px-2 py-3">
              <Col xs="auto" className="pe-3">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="rounded-circle profile-img"
                />
              </Col>
              <Col>
                <div className="fw-bold fs-5 mb-1">John Doe</div>
                <div className="text-muted text-truncate">
                  johndoe@example.com
                </div>
              </Col>
            </Row>
          </div>

          <div className="list-group">
            {sections.map(({ key, title, desc }) => (
              <div
                key={key}
                role="button"
                tabIndex={0}
                className={`list-group-item list-group-item-action my-3 ${
                  selectedSection === key ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedSection(key);
                  setOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedSection(key);
                    setOpen(true);
                  }
                }}
              >
                <div className="me-5">
                  <div className="fw-semibold">{title}</div>
                </div>
                <small className="text-muted">{desc}</small>
              </div>
            ))}
          </div>
        </Col>

        <Col md={7} className="content-column pe-2 ps-0 my-5 me-5">
          <div className="mx-2">
            <SectionHeader title={selectedSection} />
            {open && <SectionContent />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyProfileLarger;

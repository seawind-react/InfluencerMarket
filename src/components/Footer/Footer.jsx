import React from "react";
import "./footer.css";
import { Col, Container, Row, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assests/Images/logo.png";
const quik__links = [
  {
    path: "/about-us",
    display: "About-Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/plan",
    display: "Plan",
  },
  {
    path: "/faq",
    display: "FAQ",
  },
];

const quik__links2 = [
  {
    path: "/signUp",
    display: "Register as a Model",
  },
  {
    path: "/signUp",
    display: "Register as an Influencer",
  },
  {
    path: "/hiremodel",
    display: "Hire as a model",
  },
  {
    path: "/hireinfluencer",
    display: "Hire an Influencer",
  },
];

const quik__links3 = [
  {
    path: "/signUp",
    display: "Sign Up as Model",
  },
  {
    path: "/signUp",
    display: "Sign Up as Influencer",
  },
  {
    path: "/signUp",
    display: "Sign Up as Enterprise",
  },
  {
    path: "/contactUS",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-section inner-page-footer">
      <Container>
        <Row className="">
          <Col
            md="10"
            lg="8"
            xl="6"

            className="offset-md-1 offset-lg-2 offset-xl-3 address-section-main "
            style={{ marginTop: "-165px", padding: "10px" }}
          >
            <div className="address-section">
              <div className="address-box">
                <div className="address-icon" style={{ fontSize: "50px" }}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4>Address</h4>
                <p>
                  B-1103, Mondeal Heights, Nr. Novotel Hotel, SG Highway,
                  Nr.Iscon Circle, Ahmedabad.
                </p>
              </div>
              <div className="address-box">
                <div className="address-icon" style={{ fontSize: "50px" }}>
                  <i className="fa-solid fa-desktop"></i>
                </div>
                <h4>Portfolio</h4>
                <p>
                  <a href="#">info@seawindsolution.com</a>
                </p>
              </div>
            </div>
          </Col>
          <Col md="12" className="logo-section">
            <div className="footer-socila">
              <ul>
                <li className="footer-icon">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className=" fa fa-facebook-f"
                    title="facebook"
                  />
                </li>
                <li className="footer-icon">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className=" fa fa-twitter"
                    title="Twitter"
                  />
                </li>
                <li className="footer-icon">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className=" fa fa-instagram"
                    title="instagram"
                  />
                </li>
                <li className="footer-icon">
                  <a
                    href="#"
                    target="_blank"
                    className=" fa fa-youtube"
                    title="youtube"
                  />
                </li>
              </ul>
              <div className="text-center mt-2 mb-2">
                <a href="#">
                  <img className="img-fluid footerlogo" src={Logo} width="50%" alt="" />
                </a>
              </div>
            </div>
          </Col>


          {/* <div className="col-md-4 address-section" style={{ marginTop: "-165px", padding: "10px" }}>
            <div className="address-box">
              <div className="address-icon" style={{ fontSize: "50px" }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h4>Address</h4>
              <p>
                B-1103, Mondeal Heights, Nr. Novotel Hotel, SG Highway,
                Nr.Iscon Circle, Ahmedabad.
              </p>
            </div>
          </div>
          <div className="col-md-4"  >
            <div className="address-box">
              <div className="address-icon" style={{ fontSize: "50px" }}>
                <i className="fa-solid fa-desktop"></i>
              </div>
              <h4>Portfolio</h4>
              <p>
                <a href="#">info@seawindsolution.com</a>
              </p>
            </div>
          </div> */}
        </Row>
      </Container>
      <div className="footer-btn-section pt-md-5">
        <Container>
          <Row>
            <Col md="4" className="custom-link">
              <h4>READING LINKS</h4>
              {quik__links.map((item, index) => (
                <ListGroupItem key={index} className="link">
                  <Link to={item.path} className="footer-link">{item.display}</Link>
                </ListGroupItem>
              ))}
            </Col>
            <Col md="4" className="custom-link">
              <h4>AUDITIONS</h4>
              {quik__links2.map((item, index) => (
                <ListGroupItem key={index} className="link">
                  <Link to={item.path} className="footer-link">{item.display}</Link>
                </ListGroupItem>
              ))}
            </Col>
            <Col md="4" className="custom-link">
              <h4>REACH US</h4>
              {quik__links3.map((item, index) => (
                <ListGroupItem key={index} className="link">
                  <Link to={item.path} className="footer-link">{item.display}</Link>
                </ListGroupItem>
              ))}
            </Col>
          </Row>
          <Row className="pt-5 pb-2">
            <Col md="12" className="text-center">
              <p className="copyright mt-0">
                © {year} | All right Reserved | Design &amp; Developed By{" "}
                <a href="http://seawindsolution.com" className="color-1">
                  Seawind Solution Pvt. Ltd.
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer >
  );
};

export default Footer;

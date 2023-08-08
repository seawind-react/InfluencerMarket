import React from "react";
import { Col, Container, Row } from "reactstrap";
import TitleIcon from "../assests/Images/title-icon.png";
import "../style/aboutUS.css";
import Icon1 from "../assests/Images/about-icon-1.png";
import Icon2 from "../assests/Images/about-icon-2.png";
import Icon3 from "../assests/Images/about-icon-3.png";

const AboutUS = () => {
  return (
    <>

      <section className="about-section">
        <Container>
          <div className="page-title text-center">
            <h2 className="m-0">About-us</h2>
            <div className="text-center">
              <img src={TitleIcon} alt="" className="titleicon" />
            </div>
          </div>

          <Row className="d-flex align-items-center justify-content-center about-content">
            <Col md="7">
              <h4>Model Market</h4>
              <p>Where Talent Meets the Best opportunity</p>
              <p>
                We bring together a whole team of photographers, studios,
                make-up artists, hair artists, Event managers, talent, and
                production house tie-ups under one roof. We ensure modeling
                Opportunities for females, Male, children, and Celebrities.
              </p>
              <p>
                We offer Free and prime sign-up to aspiring actors and models
                and help them connect directly with modeling agencies and
                casting directors all over the Industry.
              </p>
            </Col>
            <Col md="5">
              <div className="about-services-box mt-2 mb-2">
                <div className="about-icon">
                  <img src={Icon1} alt="" />
                </div>
                <div className="about-text">OVER 20 YEARS EXPERIENCE</div>
              </div>
              <div className="about-services-box mt-2 mb-2">
                <div className="about-icon">
                  <img src={Icon2} alt="" />
                </div>
                <div className="about-text">PROFESSIONAL ADVICE</div>
              </div>
              <div className="about-services-box mt-2 mb-2">
                <div className="about-icon">
                  <img src={Icon3} alt="" />
                </div>
                <div className="about-text">
                  THE BEST MODEL AGENCY IN THE WORLD
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUS;


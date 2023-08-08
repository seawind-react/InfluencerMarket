import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../style/home.css";
import ModelCategories from "./ModelCategories";
import slider1 from "../assests/Images/slider-1.jpg";
import slider2 from "../assests/Images/slider-2.jpg";
import slider3 from "../assests/Images/slider-3.jpg";
import slider4 from "../assests/Images/slider-4.jpg";
import PopularModelPage from "./PopularModel";
import OurServices from "./OurServices";
import AboutUS from "./AboutUS";
import { Col, Row, Container } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setMyData] = useState([]);

  useEffect(() => {
    const headers = {
      "x-api-key": "123456789123456789",
    };

    axios
      .get("https://projects.seawindsolution.com/MODEL/Webservices/getBanner", {
        headers,
      })
      .then((res) => {
        setMyData(res.data.ResponseData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section>
      <div >
        <Slider {...settings}>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.Id}>
                <img className="img-fluid" src={item.Image} alt={item.Title} />
              </div>
            ))
          ) : (
            <div>
              {/* Display default sliders in case the API data is not available */}
              <div>
                <img className="img-fluid " src={slider1} alt="Slider 1" />
              </div>
              <div>
                <img className="img-fluid " src={slider2} alt="Slider 2" />
              </div>
              <div>
                <img className="img-fluid " src={slider3} alt="Slider 3" />
              </div>
              <div>
                <img className="img-fluid " src={slider4} alt="Slider 4" />
              </div>
            </div>
          )}
        </Slider>
      </div>
      <section className="pt-md-5 pb-md-5 mt-md-5 mb-md-5 custom-section">
        <PopularModelPage />
      </section>
      <section className="become-model-main mt-md-5 mb-md-5 custom-section">
        <Container className="becomemodel">
          <Row>
            <Col
              xs="12"
              className="text-center"
              style={{ position: "relative" }}
            >
              <h2 className="text-white">Become a model / Influencer</h2>

              <Link to={"/signUp"} className="btn btn-danger">Apply Now</Link>

            </Col>
          </Row>
        </Container>
      </section>
      <ModelCategories />
      <OurServices />
      <AboutUS />
      <section className="map-section mb-0">
        <div className="container-fluid map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9852818830677!2d72.50661221091082!3d23.02431261617634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86742b6dc88f%3A0x759d5db9ab4771c4!2sSeawind%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1690199899069!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}

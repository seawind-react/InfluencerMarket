import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import TitleIcon from "../assests/Images/title-icon.png";
import "../style/ourServices.css";
import Icon1 from "../assests/Images/our-service-icon-1.png";
import Model from "../assests/Images/our-services-model.png";
import { Link } from "react-router-dom";
import axios from "axios";

const OurServices = () => {
  const [servicesData, setservicesData] = useState([]);
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const headers = {
      "x-api-key": "123456789123456789",
    };
    axios.get("https://projects.seawindsolution.com/MODEL/Webservices/getServices",
      // servicesData,
      {
        headers,
      }
    )
      .then((res) => {
        // Handle the successful response if needed  
        setservicesData(res.data)
        setApiResponse(res.data.Message); // You can set any success message you want
        // Reset form data and errors
        setErrors({});
        // sessionStorage.setItem("ServiceDetails", JSON.stringify(res.data))
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("API error:", error);
        setApiResponse("An error occurred. Please try again later.");
      });
  }, []);

  const slicedData = servicesData.ResponseData?.slice(0, 4);
  const slicedData2 = servicesData.ResponseData?.slice(4, 8);
  return (
    <>
      <div className="page-title text-center">
        <h2 className="m-0">Our Services</h2>
        <div className="text-center">
          <img src={TitleIcon} alt="" className="titleicon" />
        </div>
      </div>
      <section className="our-services-section">
        <div className="container-fluid">
          <Row className="d-flex align-items-center justify-content-center">

            <Col md="4">
              {slicedData?.map((val, index) => {
                return (
                  <div className="our-services-box mt-2 mb-2">
                    <div className="our-icon">
                      <img src={val.Icon} alt="" />
                    </div>
                    <h5 className="our-text" >
                      <Link to={`/services/${val.Slug}`}  >{val.Title}</Link>
                    </h5>
                  </div>
                )
              })}
            </Col>
            <Col md="4" className="our-service-model">
              <img className="img-fluid" src={Model} alt="" />
            </Col>
            <Col md="4">
              {slicedData2?.map((val, index) => {
                return (
                  <div className="our-services-box mt-2 mb-2">
                    <div className="our-icon">
                      <img src={val.Icon} alt="" />
                    </div>
                    <h5 className="our-text" >
                      <Link to={`/services/${val.Slug}`}  >{val.Title}</Link>
                    </h5>
                  </div>
                )
              })}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default OurServices;

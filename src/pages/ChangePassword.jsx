import React, { useEffect, useState } from "react";
import BannerImage from "../assests/Images/services-banner.jpg";
import { useNavigate } from "react-router";
import TitleIcon from "../assests/Images/title-icon.png";
import { Col, Container, Row } from "reactstrap";
import "../style/changepassword.css";
import axios from "axios";

const ChangePassword = () => {

  const userDataString = sessionStorage.getItem('InfluncerData');
  const userData = JSON.parse(userDataString);
  const ID = userData.ResponseData.Id;

  const [formData, setFormData] = useState({
    Id: ID,
    OldPassword: "",
    NewPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "multipart/form-data",
      "x-api-key": "123456789123456789",
    };

    axios
      .post(
        "https://projects.seawindsolution.com/MODEL/Webservices/changePassword",
        formData,
        {
          headers,
        }
      )
      .then((res) => {
        // Handle the successful response if needed
        console.log("API response:", res.data);
        if (res.IsSuccess == false) {
          setApiResponse(res.data.Message);
          console.log(res.data.Message);
        } else {
          setApiResponse(res.data.Message); // You can set any success message you want
          console.log(res.data.Message);
        }
        // Reset form data and errors
        setFormData({
          OldPassword: "",
          NewPassword: "",
        });
        setErrors({});
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("API error:", error);
        setApiResponse("An error occurred. Please try again later.");
      });
  };

  return (
    <main>
      <section className="inner-page-banner">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <img src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5 modeling-details-section bg-black">
        <div className="container">
          <div className="page-title text-center">
            <h2 className="m-0 text-white">Change Password</h2>
            <p>
              Want to be a model? Do you have a professional, courteous attitude
              and dynamic personality? We are accepting applications nationwide
              to be part of the exclusive Models marketplace team! Please
              complete this form. Must include recent photos.
            </p>
            <div className="text-center">
              <img src={TitleIcon} alt="icon" className="titleicon" />
            </div>
          </div>
        </div>
        <div className="container  mt-5 pb-5">
          <div>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-6">
                <div className="bg-dark-light py-4 px-4">
                  <form id="changeFrm" className="forgot-form" onSubmit={handleSubmit}>
                    {apiResponse && <div className="api-response">{apiResponse}</div>}

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">

                          <input
                            type="password"
                            onChange={handleChange}
                            name="OldPassword"
                            id="Old"
                            className="form-control"
                            placeholder="Current password"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">

                          <input
                            type="password"
                            onChange={handleChange}
                            name="NewPassword"
                            id="New"
                            className="form-control"
                            placeholder="New password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            form="changeFrm"
                            value="Change"
                            name="Change"
                            className="btn btn-danger px-4"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;

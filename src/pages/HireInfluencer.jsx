import React from "react";
import BGIMAGE from "../assests/Images/hire-model-banner.jpg";
import TitleIcon from "../assests/Images/title-icon.png";
import "../style/Hiremodel.css";

const HireInfuncer = () => {
  return (
    <div>
      <main>
        <section className="inner-page-banner">
          <div className="container-fluid m-0">
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="inner-page-banner ">
                  <img src={BGIMAGE} alt="Background-Images" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-2 pb-2 bg-black">
          <div className="container">
            <div className="page-title text-center hire-form">
              <h2 className="m-0">Hire A Influencer</h2>
              <img src={TitleIcon} alt="Title Icon" className="titleicon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </div>
          <div className="container w-75 mt-5 pt-2 pb-5">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-uppercase mb-5 bg-black">
                  Post Your Requirement
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 model-hire-form ">
                <form
                  name="Contactfrm"
                  className="contact-form"
                  id="Contactfrm"
                >
                  <div className="model-contact-form">
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            id="Name"
                            name="Name"
                            className="form-control"
                            placeholder="First Name*"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            id="Phone"
                            name="Phone"
                            className="form-control"
                            placeholder="Enter your Mobile"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            id="Email"
                            name="Email"
                            className="form-control"
                            placeholder="Enter your Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            id="Brand"
                            name="Brand"
                            className="form-control"
                            placeholder="Company/Brand Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            id="Subject"
                            name="Subject"
                            className="form-control"
                            placeholder="Subject *"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <textarea
                            rows="6"
                            cols="45"
                            id="Message"
                            name="Message"
                            className="form-control"
                            placeholder="Comments/Details *"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <button
                          name="Contact"
                          value="Contact"
                          type="submit"
                          className="btn btn-danger px-4"
                        >
                          <i className="fa fa-paper-plane mr-2 py-2 px-2"></i>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HireInfuncer;

import React, { useState } from "react";
import Bg from "../assests/Images/contact-back.jpg";
import TitleIcon from "../assests/Images/title-icon.png";
import "../style/contactus.css";
import "../style/Map.css";
import axios from "axios";

const ContactUS = () => {
  const [contactdata, setcontactdata] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: ""
  });
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);

  const MyHandler = (e) => {
    setcontactdata({ ...contactdata, [e.target.name]: e.target.value })
  }

  const MySubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, such as making an API request
    const headers = {
      "x-api-key": "123456789123456789",
      "Content-Type": "multipart/form-data",
    };
    axios.post("https://projects.seawindsolution.com/MODEL/Webservices/contactUs",
      contactdata,
      {
        headers,
      }
    )
      .then((res) => {
        // Handle the successful response if needed  
        setApiResponse(res.data.Message); // You can set any success message you want
        // Reset form data and errors
        setcontactdata({
          Name: "",
          Email: "",
          Phone: "",
          Message: ""
        });
        setErrors({});
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("API error:", error);
        setApiResponse("An error occurred. Please try again later.");
      });

  }
  return (
    <div>
      <main>
        <section className="inner-page-banner">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1 page-section-internal__heading"></h1>
                <img src={Bg} alt="Background Image" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-5 bg-black">
          <div className="container">
            <div className="page-title text-center">
              <h2 className="m-0 text-white">Contact Us</h2>
              <div className="text-center mb-3">
                <img src={TitleIcon} alt="icon" className="titleicon" />
              </div>
              <p>
                Get in touch. We'll get back to you ASAP. We look forward to
                working with you soon.
              </p>
            </div>
          </div>
          <div className="container  mt-5 pt-5 pb-5">
            <div className="row mb-5">
              <div className="col-sm-4 text-center">
                <div>
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <p className="mb-2 text-white">
                    <a href="tel:+91-81418 87285"> +91-81418 87285</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div>
                  <div className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <p className="mb-0">
                    A-311, Mondeal Heights, Nr. Novotel Hotel, SG Highway,
                    Nr.Iscon Circle, Ahmedabad
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div>
                  <div className="contact-icon">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <p className="text-white">
                    <a href="mailto:info@seawindsolution.com">
                      info@seawindsolution.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row mx-auto">

              <div className="col-12">
                <div className="bg-dark-light py-4 px-4 contact-page-form">
                  {apiResponse && (
                    <div className="api-response">{apiResponse}</div>
                  )}<form
                    onSubmit={MySubmit}
                    className="contact-form"
                    id="Contactfrm"
                  >
                    {/* <input type="hidden" name="csrf_sws_token" value="839d725705f26cc7102a3f6eee7449d2" /> */}
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Name"
                            value={contactdata.Name}
                            onChange={MyHandler}
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="Email"
                            value={contactdata.Email}
                            onChange={MyHandler}
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="Phone"
                            value={contactdata.Phone}
                            onChange={MyHandler}
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            rows="6"
                            cols="45"
                            value={contactdata.Message}
                            name="Message"
                            onChange={MyHandler}
                            className="form-control"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <button
                            name="Contact"
                            value="Contact"
                            type="submit"
                            className="btn btn-danger form-control"
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
          </div>
        </section>
        <section className="map-section">
          <div className="container-fluid map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29376.153870234924!2d72.506766!3d23.023066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x759d5db9ab4771c4!2sSeawind%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1654494346523!5m2!1sen!2sin"
              width="100%"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUS;

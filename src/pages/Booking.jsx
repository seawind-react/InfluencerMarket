import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TitleIcon from "../assests/Images/title-icon.png";
import { ToastContainer, toast } from "react-toastify";
import BannerImage from "../assests/Images/services-banner.jpg";
import axios from "axios";
import '../style/BookingForm.css'

const Booking = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        DOB: "",
        Email: "",
        Phone: "",
        Gender: ""
    });

    const [errors, setErrors] = useState({});
    const [apiResponse, setApiResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation checks
        const validationErrors = {};

        if (formData.FirstName.trim() === "") {
            validationErrors.firstName = "Please enter your first name.";
        }

        if (formData.LastName.trim() === "") {
            validationErrors.lastName = "Please enter your last name.";
        }

        if (formData.Email.trim() === "") {
            validationErrors.email = "Please enter your email.";
        } else if (!emailIsValid(formData.Email)) {
            validationErrors.email = "Please enter a valid email address.";
        }

        if (formData.Phone.trim() === "") {
            validationErrors.phoneNumber = "Please enter your phone number.";
        } else if (!phoneIsValid(formData.Phone)) {
            validationErrors.phoneNumber = "Please enter a valid phone number.";
        }

        if (formData.DOB.trim() === "") {
            validationErrors.dateOfBirth = "Please enter your date of birth.";
        }
        // if (formData.Type.trim() === "") {
        //   validationErrors.type = "Please Select Type";
        // } else setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Perform signup logic here, such as making an API request
        const headers = {
            "Content-Type": "multipart/form-data",
            "x-api-key": "123456789123456789",
        };

        axios
            .post(
                "____________________________________________________________",
                formData,
                {
                    headers,
                }
            )
            .then((res) => {
                // Handle the successful response if needed
                // console.log("API response:", res.data);
                if (res.IsSuccess == false) {
                    setApiResponse(res.data.Message);
                } else {
                    setApiResponse(res.data.Message); // You can set any success message you want
                }

                // Reset form data and errors
                setFormData({
                    FirstName: "",
                    LastName: "",
                    DOB: "",
                    Email: "",
                    Phone: "",
                    Gender: "",
                });
                setErrors({});
            })
            .catch((error) => {
                // Handle the error if needed
                console.error("API error:", error);
                setApiResponse("An error occurred. Please try again later.");
            });
    };

    const emailIsValid = (email) => {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const phoneIsValid = (phone) => {
        // Basic phone number validation regex
        return /^[0-9]{10}$/.test(phone);
    };
    return (
        <section className="pt-5 pb-5 modeling-details-section bg-black">
            <div className="inner-page-banner">
                <img src={BannerImage} alt="" />
            </div>
            <Container>
                <div className="signup-title text-center">
                    <h2 className="m-0">Show Booking</h2>
                    <div className="text-center">
                        <p className="mt-3">
                            Want to be a model? Do you have a professional, courteous attitude
                            and dynamic personality? We are accepting applications nationwide
                            to be part of the exclusive Models marketplace team! Please
                            complete this form. Must include recent photos.
                        </p>
                        <img src={TitleIcon} alt="" className="titleicon" />
                    </div>
                </div>
            </Container>
            <Container className="booking-content mt-5 pb-5" >
                <div className="booking-form">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col lg="7">
                            <div className="bg-dark-light py-4 px-4 booking-page-from">
                                <form
                                    onSubmit={handleSubmit}
                                    className="booking-form"
                                    method="POST"
                                >
                                    {apiResponse && (
                                        <div className="api-response">{apiResponse}</div>
                                    )}
                                    <Row>

                                        <Col sm="6">
                                            <div className="form-group">
                                                <label htmlFor="firstName">First Name:</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="form-control error"
                                                    name="FirstName"
                                                    value={formData.FirstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.firstName && (
                                                    <span className="error">{errors.firstName}</span>
                                                )}
                                            </div>
                                        </Col>
                                        <Col sm="6">
                                            <div className="form-group">
                                                <label htmlFor="lastName">Last Name:</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="form-control error"
                                                    name="LastName"
                                                    value={formData.LastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.lastName && (
                                                    <span className="error">{errors.lastName}</span>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control error"
                                                    name="Email"
                                                    value={formData.Email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.email && (
                                                    <span className="error">{errors.email}</span>
                                                )}
                                            </div>
                                        </Col>
                                        <Col sm="6">
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber">Phone Number:</label>
                                                <input
                                                    type="tel"
                                                    id="phoneNumber"
                                                    className="form-control error"
                                                    name="Phone"
                                                    value={formData.Phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.phoneNumber && (
                                                    <span className="error">{errors.phoneNumber}</span>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                            <div className="form-group">
                                                <label htmlFor="dateOfBirth">Date of Birth:</label>
                                                <input
                                                    type="date"
                                                    id="dateOfBirth"
                                                    className="form-control error"
                                                    name="DOB"
                                                    value={formData.DOB}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.dateOfBirth && (
                                                    <span className="error">{errors.dateOfBirth}</span>
                                                )}
                                            </div>
                                        </Col>
                                        <Col sm='6'>
                                            <div className="form-group">
                                                <label htmlFor="function">Gender:</label>
                                                <select
                                                    id="function"
                                                    name="Gender"
                                                    value={formData.Gender}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option aria-readonly>Select</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </Col>

                                    </Row>



                                    <p className="small">
                                        By clicking Book show, you agree to our Terms, Data Policy and
                                        Cookie Policy. You may receive SMS notifications from us and
                                        can opt out at any time.
                                    </p>
                                    <button className="btn btn-danger form-control" type="submit">
                                        Book Now
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Booking;

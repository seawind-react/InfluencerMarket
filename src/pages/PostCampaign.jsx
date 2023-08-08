import React from 'react'
import BGIMAGE from "../assests/Images/services-banner.jpg";
import TitleIcon from "../assests/Images/title-icon.png";
import '../style/PostCampaign.css'
import { Col, Container, Row } from 'reactstrap';

const PostCampaign = () => {
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
                <section className="py-4 bg-black">
                    <div className="container">
                        <div className="page-title text-center hire-form">
                            <h2 className="m-0">Post Campaign</h2>
                            <img src={TitleIcon} alt="Title Icon" className="titleicon" />
                        </div>
                    </div>
                </section>
                <section className='bg-black'>
                    <Container className='py-5'>
                        <Row>
                            <Col lg="8" className='mx-auto'>
                                <div className="bg-dark-light py-4 px-4 postcampaign-page-from">
                                    <form
                                        className="postcampaign-form"
                                        method="POST"
                                    >

                                        <Row>
                                            <input
                                                type="text"
                                                hidden
                                                className="form-control"
                                                name="SignBy"
                                                required
                                            />
                                            <Col sm="6">
                                                <div className="form-group">
                                                    <label htmlFor="Name">Name:</label>
                                                    <input
                                                        type="text"
                                                        id="Name"
                                                        className="form-control error"
                                                        name="Name"
                                                        required
                                                        placeholder=' Your name'
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="form-control error"
                                                        name="Email"
                                                        placeholder='Your Email'
                                                        required
                                                    />

                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        className="form-control error"
                                                        name="Phone"
                                                        required
                                                        placeholder='Your Phone'
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="form-group">
                                                    <label htmlFor="CompanyName">Company Name:</label>
                                                    <input
                                                        type="text"
                                                        id="CompanyName"
                                                        className="form-control error"
                                                        name="companyname"
                                                        required
                                                        placeholder=' Your Comapany name'
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <label htmlFor="brief">Campaign Brief:</label>
                                                <div className="form-group">
                                                    <textarea
                                                        rows="6"
                                                        cols="45"
                                                        name="Message"
                                                        className="form-control"
                                                        placeholder="Your Message"
                                                    ></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="4">
                                                <label htmlFor="deadline">Deadline:</label><br />
                                                <select name="deadline" id="deadline" className="form-control w-100">
                                                    <option value="Less Than a Week">Less Than a Week</option>
                                                    <option value="Less Than 2 Week">Less Than 2 Week</option>
                                                    <option value="In a month">In a month</option>
                                                    <option value="After a Month">After a Month</option>
                                                </select>
                                            </Col>
                                            <Col sm="4">
                                                <label htmlFor="launch">Launch Campaign:</label><br />
                                                <select name="launch" id="launch" className="form-control w-100">
                                                    <option value="By outsource">By outsource</option>
                                                    <option value="By yourself">By yourself</option>
                                                </select>
                                            </Col>
                                            <Col sm="4">
                                                <label htmlFor="budget">Budget:</label><br />
                                                <input type="number" name="budget" id="budget" className='w-100 form-control' placeholder='₹' />
                                            </Col>
                                            <br /><br /><br /></Row>
                                        <button className="btn btn-danger w-100" type="submit">
                                            Submit
                                        </button>

                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </div>
    )
}

export default PostCampaign
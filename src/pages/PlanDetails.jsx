import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import BannerImage from "../assests/Images/services-banner.jpg";
import TitleIcon from "../assests/Images/title-icon.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlanDetails = () => {
    const [PlanDetails, setPlanDetails] = useState([]);
    const [errors, setErrors] = useState({});
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const headers = {
            "x-api-key": "123456789123456789",
        };
        axios.get("https://projects.seawindsolution.com/MODEL/Webservices/getPlan",
            // PlanDetails,
            {
                headers,
            }
        )
            .then((res) => {
                // Handle the successful response if needed  
                setPlanDetails(res.data)
                setApiResponse(res.data.Message); // You can set any success message you want
                // Reset form data and errors
                setErrors({});
            })
            .catch((error) => {
                // Handle the error if needed
                console.error("API error:", error);
                setApiResponse("An error occurred. Please try again later.");
            });
    }, []);
    console.log(PlanDetails);
    return (
        <>
            <main>
                <section className="inner-page-banner" >
                    <Container fluid className='p-0'>
                        <Row>
                            <Col>
                                <img src={BannerImage} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="pt-5 pb-5 modeling-details-section bg-black">
                    <Container>
                        <div className="page-title text-center">
                            <h2 className="m-0 text-white">Portfolio Packages</h2>
                            <p>Acting Portfolio Cost | Portfolio Photoshoot Price | Indoor And Outdoor Pricing Packages</p>
                            <div className="text-center">
                                <img src={TitleIcon} alt="" className="titleicon" />
                            </div>
                        </div>
                    </Container>
                    <Container className="service-content mt-5 pt-5 pb-5">
                        <Row className='p-2'>
                            {PlanDetails.ResponseData?.map((value) => {
                                return (
                                    <>
                                        <div className="col-md-3 col-sm-6 p-1 bg-dark my-3">
                                            <div className="text-center px-2 py-4">
                                                <h4 className="price-title"><b>{value.Title}</b></h4>
                                                <hr />
                                                <div dangerouslySetInnerHTML={{ __html: value.Content }} />
                                                <h4 hidden>{value.Slug}</h4>
                                                <h4 ><b>{value.ShortDescription}</b></h4>
                                                <h4  ><b>{value.Price}</b></h4>
                                                <hr />
                                                <Link to={"/signUp"} className="btn btn-danger align-items-center w-100"><b>Sign up</b></Link>

                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </Row>

                    </Container>
                </section>
            </main >
        </>
    )
}

export default PlanDetails
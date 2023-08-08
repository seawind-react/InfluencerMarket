import React, { useEffect, useState } from 'react'
import BGIMAGE from "../../assests/Images/services-banner.jpg";
import TitleIcon from "../../assests/Images/title-icon.png";
import '../../style/Services.css'
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServiceDetail from './ServiceDetails ';
import OurServices from '../OurServices';


const Services = (service) => {
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



    return (
        <div>
            <Helmet>
                <title>Influencer Market | Services</title>
            </Helmet>
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
                                <h2 className="m-0">Our Model Services</h2>
                                <img src={TitleIcon} alt="Title Icon" className="titleicon" />
                            </div>
                        </div>
                        <div class="container service-content mt-5 pt-5 pb-5">
                            <div class="row">
                                {servicesData.ResponseData?.map((val, index) => {
                                    return (
                                        <div class="col-md-4 mb-4" key={val.Id}>
                                            <div class="service-content-box">
                                                <div class="item">
                                                    <a href="javascript:void(0)"> <img src={val.Image} alt="" /></a>
                                                </div>
                                                <div class="service-content-details">

                                                    <h5 >
                                                        <Link to={`/services/${val.Slug}`}  >{val.Title}</Link>
                                                    </h5>
                                                    <span hidden>  {val.Slug}   </span>
                                                    <p>{val.ShortDescription}</p>
                                                    <div class="services-btn" >
                                                        <Link
                                                            className="btn btn-danger"
                                                            to={`/services/${val.Slug}`}

                                                        >
                                                            <span>
                                                                Read More
                                                                <i className="fa fa-long-arrow-right ms-2"></i>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Services
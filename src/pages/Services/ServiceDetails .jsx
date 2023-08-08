import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import TitleIcon from "../../assests/Images/title-icon.png";


const ServiceDetail = () => {


    const { slug } = useParams();
    const [selectedService, setSelectedService] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const headers = {
            "x-api-key": "123456789123456789",
        };
        axios
            .get(`https://projects.seawindsolution.com/MODEL/Webservices/getServicesBySlug/${slug}`, {
                headers,
            })
            .then((res) => {
                setSelectedService(res.data.ResponseData);
                setApiResponse(res.data.Message); // You can set any success message you want
            })
            .catch((error) => {
                // Handle the error if needed
                console.error("API error:", error);
                setApiResponse("An error occurred. Please try again later.");
            });
    }, [slug]);

    if (!selectedService) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <main>
                <section className="inner-page-banner" >
                    <Container fluid className=' p-0'>
                        <Row>
                            <Col>
                                <img src={selectedService.Image} width="100%" alt="icon" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="pt-5 modeling-details-section bg-black">
                    <Container fluid>
                        <div className="page-title text-center">
                            <h2 className="m-0 text-white">{selectedService.Title}</h2>
                            <img src={TitleIcon} alt="" className="titleicon" />
                        </div>
                    </Container>
                    <div className="container modeling-content-details mt-5 pt-5 pb-5">
                        <p  ><div dangerouslySetInnerHTML={{ __html: selectedService.Content }} /></p>        </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceDetail;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Container, Row, UncontrolledCollapse } from 'reactstrap';
import TitleIcon from "../assests/Images/title-icon.png";
import BannerImage from "../assests/Images/services-banner.jpg";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "../../src/style/FAQ.css"

const FAQ = () => {
    const [faqData, setfaqData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {

        const headers = {
            "x-api-key": "123456789123456789"
        }
        axios.get("https://projects.seawindsolution.com/MODEL/Webservices/getFaq", {
            headers
        }).then((res) => {
            setfaqData(res.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleToggleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (



        <main>
            <section class="inner-page-banner">
                <Container fluid className='p-0'>
                    <Row>
                        <div class="col-md-12">
                            <img src={BannerImage} alt="Banner Image" />
                        </div>
                    </Row>
                </Container>
            </section>
            <section class="pt-5 pb-5 modeling-details-section bg-black">
                <Container>
                    <div class="page-title text-center">
                        <h2 class="m-0">faq</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="text-center">
                            <img src={TitleIcon} alt="icon" className='titleicon' />
                        </div>
                    </div>
                </Container>
                <Container className='my-5'>
                    {faqData.ResponseData?.map((faq, index) => (
                        <div className="p-3 bg-dark-light border rounded-3 mb-2 " key={faq.Id}>
                            <div onClick={() => handleToggleClick(index)} id="toggler" >
                                <h5 ><b>{faq.Title}
                                    <span className='float-end' >{activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</span></b></h5>
                            </div>
                            {activeIndex === index && (
                                <Card toggler="#toggler" className='text-dark' >
                                    <CardBody dangerouslySetInnerHTML={{ __html: faq.Content }} />
                                </Card>
                            )}
                        </div>
                    ))}
                </Container>
            </section>
        </main>
    )
}

export default FAQ
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Influencer from "../../assests/Influencer.png";
import Profile from "../../assests/profile.png";
import Retina from "../../assests/retina.png";
import Megaphone from "../../assests/megaphone.png";
import TitleIcon from "../../assests/Images/title-icon.png";
import Features1 from "../../assests/feature-1.jpg";
import Features2 from "../../assests/feature-2.png";
import Features3 from "../../assests/feature-3.jpg";
import Brand1 from "../../assests/influencer-brands-1.jpg";
import Brand2 from "../../assests/influencer-brands-2.jpg";
import Brand3 from "../../assests/influencer-brands-3.jpg";
import Brand4 from "../../assests/influencer-brands-4.jpg";
import Compaign1 from '../../assests/campaign-1.png'
import Compaign2 from '../../assests/campaign-2.png'
import Compaign3 from '../../assests/campaign-3.png'
import Compaign4 from '../../assests/campaign-4.png'
import Compaign5 from '../../assests/campaign-5.png'
import Compaign6 from '../../assests/campaign-6.png'
import SEO from "../../assests/seo.png";
import "../../style/howItsWork.css";
import Slider from "react-slick";

const HowItsWork = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  var settingsLast = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="pt-3 pb-3">
      <Container>
        <div className="page-title text-center ">
          <h2 className="m-0">Why us</h2>
          <div className="text-center">
            <img src={TitleIcon} alt="" className="titleicon" />
          </div>
        </div>
      </Container>
      <Container fluid className="modeling-content-details">
        <Row style={{ marginRight: "0px" }}>
          <Col md="6" className="left-side">
            <img src={Influencer} alt="" />
          </Col>
          <Col md="6" className="right-side">
            <Row>
              <div className="gallery ">
                <Col md="2" className="md-5">
                  <img src={SEO} alt="" />
                </Col>

                <Col md="10" className="content-details pt-md-5">
                  <p className="text-black text-center">
                    "Join the"
                    <span className="text-highlight"> #1 Destination </span>
                    where brands search Influencers for brand campaigns in India
                  </p>
                  <br />
                  <p className="sub-content">
                    Be a part of the community where 6700+ brands search for
                    Influencers every month for campaigns/events.
                  </p>
                </Col>
              </div>
              <div className="gallery ">
                <Col md="2" className="md-5">
                  <img src={Profile} alt="" />
                </Col>

                <Col md="10" className="content-details pt-md-5">
                  <p className="text-black text-center">
                    "Create a"
                    <span className="text-highlight"> Free Profile</span>
                    in a hassle free manner
                  </p>
                  <br />
                  <p className="sub-content">
                    By creating your profile on Qoruz the chances of being
                    visible to brands is 3x compared to any other platforms..
                  </p>
                </Col>
              </div>
              <div className="gallery ">
                <Col md="2" className="md-5">
                  <img src={Retina} alt="" />
                </Col>

                <Col md="10" className="content-details pt-md-5">
                  <p className="text-black text-center">
                    "Be visible to"
                    <span className="text-highlight"> 6700+ Brands</span>
                    throughout the country
                  </p>
                  <br />
                  <p className="sub-content">
                    Be on top of the brand searches by creating your profile and
                    work on different brand collaborations in your niche
                  </p>
                </Col>
              </div>
              <div className="gallery ">
                <Col md="2" className="md-5">
                  <img src={Megaphone} alt="" />
                </Col>

                <Col md="10" className="content-details pt-md-5">
                  <p className="text-black text-center">
                    "Get"
                    <span className="text-highlight"> exclusive access</span>
                    to brand campaigns, events etc
                  </p>
                  <br />
                  <p className="sub-content">
                    Not just paid collaborations, build strong relationships
                    with the brands and get exclusive access to the brand events
                    and much more.
                  </p>
                </Col>
              </div>
            </Row>
          </Col>

          <Col md="12">
            <div className="features-section py-5 bg-light mt-md-5 custom-section">
              <div className="features-content-main px-2 ">
                <div className="features-box">
                  <img className="img-fluid" src={Features1} alt="model" />
                  {/* <h3 class="text-center m-0">Paid Brand Collaborations</h3> */}
                  <div className="overlay">
                    <div className="block-features-name">
                      <span>Paid Brand Collaborations</span>
                    </div>
                    <div className="features-content">
                      <div className="features-content-center d-flex align-items-center justify-content-around align-self-stretch">
                        <div className="features-content-details">
                          <p>
                            From simple shoutouts to unboxing videos, get paid for the
                            content you love to create.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <img className="img-fluid" src={Features2} alt="model" />
                  {/* <h3 class="text-center m-0">Access to Exclusive events</h3> */}
                  <div className="overlay">
                    <div className="block-features-name">
                      <span>Access to Exclusive events</span>
                    </div>
                    <div className="features-content">
                      <div className="features-content-center d-flex align-items-center justify-content-around align-self-stretch">
                        <div className="features-content-details">
                          <p>
                            Music fest, Brand launches, Invite only meetups and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <img className="img-fluid" src={Features3} alt="model" />
                  {/* <h3 class="text-center m-0">Brand Rewards and Goodies</h3> */}
                  <div className="overlay">
                    <div className="block-features-name">
                      <span>Brand Rewards and Goodies</span>
                    </div>
                    <div className="features-content">
                      <div className="features-content-center d-flex align-items-center justify-content-around align-self-stretch">
                        <div className="features-content-details">
                          <p>
                            Get to try products and experiences ahead of everybody
                            else.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Row className="brand-section d-flex m-0">
            <Col md="6">
              <div className="brand-heading">
                <h2 className="text-black">
                  "Over"
                  <span>6700 brands</span>
                  "are"
                </h2>
                <h2 className="text-black">Searching for Influencers</h2>
                <p>
                  Top brands from all over the globe are searching for influencers
                  like you on Qoruz.
                </p>
                <a href="/signUp">
                  <button className="btn">Create my Profile</button>
                </a>
              </div>
            </Col>
            <Col md="6" className="logobanner ">
              <div>
                <Slider {...settings}>
                  <div className="brand-slider ">
                    <img className="img-fluid" src={Brand1} alt="" />
                  </div>
                  <div className="brand-slider ">
                    <img className="img-fluid" src={Brand2} alt="" />
                  </div>
                  <div className="brand-slider ">
                    <img className="img-fluid" src={Brand3} alt="" />
                  </div>
                  <div className="brand-slider ">
                    <img className="img-fluid" src={Brand4} alt="" />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>

      <div className="text-center m-0">
        <h2 className="mt-3"><b> Some of <span style={{ color: "plum" }}>The Capaigns</span><br />
          You've Missed..</b></h2>
        <img src={TitleIcon} alt="" className="titleicon" />
        <Slider {...settingsLast} className="m-0">
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign1} /></div>
          </div>
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign2} /></div>
          </div>
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign3} /></div>
          </div>
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign4} /></div>
          </div>
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign5} /></div>
          </div>
          <div className="">
            <div className="swiper-slide w-100 p-3"><img src={Compaign6} /></div>
          </div>

        </Slider>
      </div>



    </section>
  );
};

export default HowItsWork;

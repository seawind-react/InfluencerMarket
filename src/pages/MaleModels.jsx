import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "../style/femaleModel.css";
import TitleIcon from "../assests/Images/title-icon.png";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';

const MaleModelPage = () => {
  const [popularModels, setPopularModels] = useState([]);

  useEffect(() => {
    // Fetch popular models from an API or any data source
    // and update the state with the received data
    fetchPopularModels()
      .then((data) => setPopularModels(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchPopularModels = async () => {
    // Fetch popular models data from an API
    // Replace this with your actual API endpoint
    const response = await fetch("https://api.example.com/popular-models");
    const data = await response.json();
    return data;
  };

  const POPOLARDATA = [{
    Image: "https://www.projects.seawindsolution.com/MODEL/assets/uploads/Product/ProductImage/1654336410_1.jpg",
    name: "Alisha",
    Height: "180.34",
    Bust: "32.2",
    Weight: "45",
    Waist: "28.7",
    Age: "25",
    Hips: "36.6",
    Facebook: "https://www.facebook.com/",
    Twiter: "https://twitter.com/",
    Linkdeen: "https://www.linkedin.com/",
    Instagram: "https://www.instagram.com/"
  }, {
    Image: "https://www.projects.seawindsolution.com/MODEL/assets/uploads/Product/ProductImage/1654336410_1.jpg",
    name: "Alisha",
    Height: "180.34",
    Bust: "32.2",
    Weight: "45",
    Waist: "28.7",
    Age: "25",
    Hips: "36.6",
    Facebook: "https://www.facebook.com/",
    Twiter: "https://twitter.com/",
    Linkdeen: "https://www.linkedin.com/",
    Instagram: "https://www.instagram.com/"
  }, {
    Image: "https://www.projects.seawindsolution.com/MODEL/assets/uploads/Product/ProductImage/1654336410_1.jpg",
    name: "Alisha",
    Height: "180.34",
    Bust: "32.2",
    Weight: "45",
    Waist: "28.7",
    Age: "25",
    Hips: "36.6",
    Facebook: "https://www.facebook.com/",
    Twiter: "https://twitter.com/",
    Linkdeen: "https://www.linkedin.com/",
    Instagram: "https://www.instagram.com/"
  }]
  return (
    <section className="pt-md-5 pb-md-5 mt-md-5 mb-md-5 custom-section">
      <Container>
        <div className="page-title text-center">
          <h2 className="m-0">Male Models</h2>
          <div className="text-center">
            <img src={TitleIcon} alt="" className="titleicon" />
          </div>
        </div>
      </Container>
      {/* <div className="models-gallery-section py-5 bg-light mt-md-5 custom-section">
        <div className="px-2 models-content-main">
          <div className="models-box"> */}
      <section className="pt-md-5 pb-md-5 mt-md-5 mb-md-5 custom-section" >

        <div fluid className="models-gallery-section py-5 bg-light mt-md-5 custom-section">
          <div className="px-2 models-content-main">
            {POPOLARDATA.map((value, index) => {
              return (
                <>
                  <div className="models-box">
                    <img className="img-fluid" src={value.Image} alt="" />
                    <h3 className="text-center m-0">{value.name}</h3>
                    <div className="overlay">
                      <div className="block-model-name"><a href="https://www.projects.seawindsolution.com/MODEL/model-detail/Alisha"> Alisha </a></div>
                      <div className="models-content">
                        <div className="models-content-left d-flex align-items-center justify-content-around align-self-stretch">
                          <div className="models-content-details">
                            <h4>Height</h4>
                            <p>{value.Height}</p>
                            <h4>Bust</h4>
                            <p className="m-0">{value.Bust}</p>
                          </div>
                          <div className="models-content-details">
                            <h4>Weight</h4>
                            <p>{value.Weight}</p>
                            <h4>Waist</h4>
                            <p className="m-0">{value.Waist}</p>
                          </div>
                          <div className="models-content-details">
                            <h4>Age</h4>
                            <p>{value.Age}</p>
                            <h4>Hips</h4>
                            <p className="m-0">{value.Hips}</p>
                          </div>
                        </div>
                        <div className="models-social-box">
                          <div>
                            <a href={value.Facebook} target="_blank" className="popularmodelIcon" title="facebook"><FaFacebookF /></a>
                            <a href={value.Twiter} target="_blank" className="popularmodelIcon" title="Twitter"><BsTwitter /></a>
                            <a href={value.Linkdeen} target="_blank" className="popularmodelIcon" title="linkedin"><BiLogoLinkedin /></a>
                            <a href={value.Instagram} target="_blank" className="popularmodelIcon" title="instagram"><BsInstagram /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
      {/* </div> */}
      {/* //     </div> */}
      {/* //   </div> */}
    // </section>
  );
};

export default MaleModelPage;

import React from "react";
import { Container } from "reactstrap";
import TitleIcon from "../assests//Images/title-icon.png";

const Celebraties = () => {
  return (
    <section className="pt-md-5 pb-md-5 mt-md-5 mb-md-5 custom-section">
      <Container>
        <div className="page-title text-center">
          <h2 className="m-0">Model Celebrities</h2>
          <div className="text-center">
            <img src={TitleIcon} alt="" className="titleicon" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Celebraties;

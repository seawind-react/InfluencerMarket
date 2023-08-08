import React from "react";
import TitleIcon from "../assests/Images/title-icon.png";
import Explore1 from "../assests/model-cate-01.png";
import Explore2 from "../assests/Images/model-cate-02.png";
import Explore3 from "../assests/Images/model-cate-03.png";
import Explore4 from "../assests/Images/model-cate-04.png";
import { Col, Row, Container } from "reactstrap";
import "../style/modelCategories.css";

const ModelCategories = () => {
  return (
    <section className="model-categories custom-section">
      <Container>
        <div className="page-title text-center">
          <h2 className="m-0">Model Categories</h2>
          <div className="text-center">
            <img src={TitleIcon} alt="" className="titleicon" />
          </div>
        </div>
      </Container>
      <div className="model-categories-middle">
        <Container>
          <Row>
            <Col md="6" className="model-categories-col">
              <div className="model-categories-content text-center">
                <h4>Female Models</h4>
                <a href="/female-models" className="btn btn-danger">
                  Explore Profile
                </a>
                <div className="categories-model-images mt-5">
                  <img className="img-fluid" src={Explore1} alt="" />
                </div>
              </div>
            </Col>
            <Col md="6" className="model-categories-col">
              <div className="model-categories-content text-center">
                <h4>Male Models</h4>
                <a href="/male-models" className="btn btn-danger">
                  Explore Profile
                </a>
                <div className="categories-model-images mt-5">
                  <img className="img-fluid" src={Explore2} alt="" />
                </div>
              </div>
            </Col>
            <Col md="6" className="model-categories-col">
              <div className="model-categories-content text-center">
                <h4>Celebraties</h4>
                <a href="/celebrities" className="btn btn-danger">
                  Explore Profile
                </a>
                <div className="categories-model-images mt-5">
                  <img className="img-fluid" src={Explore3} alt="" />
                </div>
              </div>
            </Col>
            <Col md="6" className="model-categories-col">
              <div className="model-categories-content text-center">
                <h4>Kids Models</h4>
                <a href="/kids-models" className="btn btn-danger">
                  Explore Profile
                </a>
                <div className="categories-model-images mt-5">
                  <img className="img-fluid" src={Explore4} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ModelCategories;

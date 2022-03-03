import React from "react";
// import "./style.css";
import SingleCard from "./SingleCard";

const Portfolio = () => (
  <div>
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <SingleCard
              cardID="portfolioModal1"
              imgName="cabin.png"
              modalTitle="Log Cabin"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <SingleCard
              cardID="portfolioModal2"
              imgName="cake.png"
              modalTitle="Tasty Cake"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <SingleCard
              cardID="portfolioModal3"
              imgName="circus.png"
              modalTitle="Circus Tent"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <SingleCard
              cardID="portfolioModal4"
              imgName="game.png"
              modalTitle="Controller"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <SingleCard
              cardID="portfolioModal5"
              imgName="safe.png"
              modalTitle="Locked Safe"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SingleCard
              cardID="portfolioModal6"
              imgName="submarine.png"
              modalTitle="Submarine"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;

import React from "react";
import img1 from "../images/portfolio/amazon.png";
import img2 from "../images/portfolio/orgportfolio.png";
import img3 from "../images/portfolio/eggcelent.png";
import img4 from "../images/portfolio/gym.png";
import img5 from "../images/portfolio/portfolio2.png";
// import img6 from "../images/portfolio/res.png";
import img7 from "../images/portfolio/crudReduxtoolkit.png";
import img8 from "../images/portfolio/cafe1.png";
import img9 from "../images/portfolio/crudreact.png";
import img10 from "../images/portfolio/weather.png";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-4 ">
              <span className="subtitle mb-4" href="www.facebook.com">
                My Complete Portfolio
              </span>
              <h2>My Latest Project</h2>
              <p>
                There are many variation of passages f Lorem ipsum dolor sit{" "}
                <br className="d-none d-md-block" />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img1 + ")" }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img2 + ")  " }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img3 + ")  " }}></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img4 + ")  " }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4  col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img5 + ")" }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img7 + ")  " }}></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img8 + ")  " }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4  col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img9 + ")" }}></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card p-0">
                <span style={{ backgroundImage: "url(" + img10 + ")  " }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

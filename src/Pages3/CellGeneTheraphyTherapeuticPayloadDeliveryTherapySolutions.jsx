import React from "react";
import { Link } from "react-router-dom";
const CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions = () => {
  return (
    <>

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link
            to="/CellGeneTheraphyTherapeuticPayloadDelivery"
            className="standard-back"
          >
            <img src="../images/back.png" alt="back" />
          </Link>
        </div>

        {/* Home Banner */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/therapy-solutions.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="therapy_solution_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMojosort">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="therapy_solution_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="therapy_solution_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="therapy_solution_4 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMultiplexPanels">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/ResearchAndDevelopment">Research & Development</Link>
          </li>
          <li>
            <Link to="/ResearchSolution">Research Solution</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyTherapeuticPayloadDelivery">
              Therapeutic Payload and Delivery
            </Link>
          </li>
          <li className="active">CAR-T Therapy Solutions</li>
        </ol>
      </div>
    </>
  );
};

export default CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions;
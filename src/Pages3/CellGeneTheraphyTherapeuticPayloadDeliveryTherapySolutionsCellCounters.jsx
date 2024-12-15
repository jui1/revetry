import React from "react";
import { Link } from "react-router-dom";
const CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters = () => {
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
            to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions"
            className="standard-back"
          >
            <img src="../images/back.png" alt="Back" />
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
            src="../images/payload-delivery-cell-counters.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaPlx">
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
              <div className="sample_preparation_solution_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx">
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
              <div className="sample_preparation_solution_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCeligo">
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
          <li>
            <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions">
              CAR-T Therapy Solutions
            </Link>
          </li>
          <li className="active">Cell Counters</li>
        </ol>
      </div>

      {/* External Scripts */}
      {/* Scripts like jQuery or custom scripts should be loaded in public/index.html or dynamically using React */}
    </>
  );
};

export default CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters;
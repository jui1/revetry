import React from "react";
import { Link } from "react-router-dom";
const CellGeneTheraphyTherapeuticPayloadDeliveryDelivery = () => {
  return (
    <div className="stretched">
      

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
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
            src="../images/delivery.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Solution 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryAdenoAssociatedViruses">
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

            {/* Solution 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution">
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

            {/* Solution 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryNanobodyTargeting">
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
            <Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyTherapeuticPayloadDelivery">
              Therapeutic Payload and Delivery
            </Link>
          </li>
          <li className="active">Delivery</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyTherapeuticPayloadDeliveryDelivery;
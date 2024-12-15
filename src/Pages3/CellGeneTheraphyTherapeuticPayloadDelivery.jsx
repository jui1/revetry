import React from "react";

const CellGeneTheraphyTherapeuticPayloadDelivery = () => {
  return (
    <div className="stretched">
      

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <a href="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </a>
        </div>

        {/* Back Button */}
        <div id="back">
          <a href="/CellGeneTheraphy" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </a>
        </div>

        {/* Home Banner */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/payload-and-delivery.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_1 clearfix">
                <div className="entry-image">
                  <a href="/GellGeneTheraphyTherapeuticPayloadDeliveryPayload">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 1"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_2 clearfix">
                <div className="entry-image">
                  <a href="/CellGeneTheraphyTherapeuticPayloadDeliveryDelivery">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 2"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_3 clearfix">
                <div className="entry-image">
                  <a href="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 3"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/ResearchAndDevelopment">Research & Development</a>
          </li>
          <li>
            <a href="/ResearchSolution">Research Solution</a>
          </li>
          <li>
            <a href="/CellGeneTheraphy">Cell & Gene Theraphy</a>
          </li>
          <li className="active">Therapeutic Payload and Delivery</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyTherapeuticPayloadDelivery;
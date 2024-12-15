import React from 'react';
import { Link } from 'react-router-dom';
function CellGeneTheraphySamplePreparationSolution() {
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
          <Link to="/CellGeneTheraphyDiscoveryIdentification" className="standard-back">
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
            src="../images/02/03/2-1-Sample Preparation Solutions.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Item 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphySamplePreparationSolutionChemagic360">
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

            {/* Item 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphySamplePreparationSolutionChemagicPrime">
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

            {/* Item 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior">
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
            <Link to="/CellGeneTheraphyIiscoveryIdentification">
              Discovery-Identification to Lead Optimization
            </Link>
          </li>
          <li className="active">Sample Preparation Solution</li>
        </ol>
      </div>
    </div>
  );
}

export default CellGeneTheraphySamplePreparationSolution;

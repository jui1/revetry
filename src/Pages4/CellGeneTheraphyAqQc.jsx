import React from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQc = () => {
  return (
    <div className="stretched">
      
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="../index.html" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/CellGeneTheraphy" className="standard-back">
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
            src="../images/02/03/05-QA-QC.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyAqQcNucleicAcidIsolation">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 1"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyAqQcCapsidDetectionKits">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 2"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyAqQcLabchipAav">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Solution 3"
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
            <Link to="/ResearchAndAevelopment">Research & Development</Link>
          </li>
          <li>
            <Link to="/ResearchSolution">Research Solution</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyPreclinicalDevelopment">
              Preclinical Development
            </Link>
          </li>
          <li className="active">QA/QC, Efficacy and Safety</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyAqQc;
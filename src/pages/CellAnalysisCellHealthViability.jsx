import React from 'react';
import { Link } from 'react-router-dom';
const CellAnalysisCellHealthViability = () => {
  return (
    <div className="stretched">
      
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
          <Link to="/CellAnalysis" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        {/* Video Banner */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/06_cellhealth_viability.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* First Content Block */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-health-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellCounting">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell Counting"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Content Block */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-health-2 clearfix">
                <div className="entry-image">
                  <Link to="/MultimodePlateReader">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Multimode Plate Reader"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
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
            <Link to="/CellAnalysis">Cell Analysis</Link>
          </li>
          <li className="active">Cell Health & Viability</li>
        </ol>
      </div>
    </div>
  );
};

export default CellAnalysisCellHealthViability;

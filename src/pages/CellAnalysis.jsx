import React from 'react';
import { Link } from 'react-router-dom';
const CellAnalysis = () => {
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
          <Link to="/ResearchAndDevelopment" className="standard-back">
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
            src="../images/clips/01_cell_analysis.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Card 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-analysis-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellAnalysisCellHealthViability">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell Health Viability"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-analysis-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellImaging">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell Imaging"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-analysis-3 clearfix">
                <div className="entry-image">
                  <Link to="/invivo">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="In Vivo"
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
            <Link to="/ResearchAndDevelopment">
              Research & Development
            </Link>
          </li>
          <li className="active">Cell Analysis</li>
        </ol>
      </div>
    </div>
  );
};

export default CellAnalysis;

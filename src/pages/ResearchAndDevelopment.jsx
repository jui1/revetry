import React from 'react';
import { Link } from 'react-router-dom';

const ResearchAndDevelopment = () => {
  return (
    <div className="stretched">
      {/* Wrapper */}
      <div className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="/images/logo-dark.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/portfolio" className="standard-back">
            <img src="/images/back-dark.png" alt="Back" />
          </Link>
        </div>

        {/* Home Banner with Video */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="./images/02/02-research-development.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="row clearfix">
            {/* Portfolio Item 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="rnd-1 clearfix">
                <div className="entry-image">
                  <Link to="/GenomicAnalysis">
                    <img
                      className="image_fade"
                      src="/images/life-science-1.png"
                      alt="Genomic Analysis"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="rnd-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellAnalysis">
                    <img
                      className="image_fade"
                      src="/images/life-science-1.png"
                      alt="Cell Analysis"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="rnd-3 clearfix">
                <div className="entry-image">
                  <Link to="/ResearchSolution">
                    <img
                      className="image_fade"
                      src="/images/life-science-1.png"
                      alt="Research Solution"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;

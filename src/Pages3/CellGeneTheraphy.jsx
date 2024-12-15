import React from 'react';
import { Link } from 'react-router-dom';

const CellGeneTheraphy = () => {
  return (
    <div className="stretched">
      {/* Preloader */}
   

      {/* Document Wrapper */}
      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        <div id="back">
          <Link to="/ResearchSolution" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/02/03/02-3-1-Cell&Gene-theraphy.webm"
          ></video>
        </div>

        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell_genetheraphy_p3_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyDiscoveryIdentification">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Discovery & Identification"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell_genetheraphy_p3_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyTherapeuticPayloadDelivery">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Therapeutic Payload Delivery"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell_genetheraphy_p3_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyPreclinicalDevelopment">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Preclinical Development"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell_genetheraphy_p3_4 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyAqQc">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="AQ QC"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell_genetheraphy_p3_5 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyManufacturingScaleup">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Manufacturing Scale-up"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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
          <li className="active">Cell & Gene Therapy</li>
        </ol>
      </div>

      {/* External Scripts */}
      <script src="../js/jquery.js"></script>
      <script src="../js/functions.js"></script>
      <script src="../js/plugins.js"></script>
      <script src="../js/uppertab.js"></script>
    </div>
  );
};

export default CellGeneTheraphy;

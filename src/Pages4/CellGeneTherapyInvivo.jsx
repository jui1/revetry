import React from "react";
import { Link } from "react-router-dom";
const CellGeneTherapyInvivo = () => {
  return (
    <div className="stretched">
      

      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </Link>
        </div>

        <div id="back">
          <Link to="/CellGeneTheraphyPreclinicalDevelopment" className="standard-back">
            <img src="../images/back.png" alt="back" />
          </Link>
        </div>

        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/05_Invivo.webm"
          ></video>
        </div>

        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="invivo-1 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoSpectrum">
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
              <div className="invivo-2 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoLuminaX5">
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
              <div className="invivo-3 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoLuminaS5">
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
              <div className="invivo-6 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoLumina">
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
              <div className="invivo-4 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoQuantum">
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
              <div className="invivo-5 clearfix">
                <div className="entry-image">
                  <Link to="/InvivoVega">
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
                    <Link to="/CellGeneTheraphyPreclinicalDevelopment">
                        Preclinical Development
                    </Link>
                </li>
                <li>
                    <Link to="/OrganoidsDevelopment">
                        Organoids Development
                    </Link>
                </li>
          <li className="active">In-Vivo</li>
        </ol>
      </div>

    </div>
  );
};

export default CellGeneTherapyInvivo
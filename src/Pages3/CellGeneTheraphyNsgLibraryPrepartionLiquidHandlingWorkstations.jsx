import React from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations = () => {
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
          <Link to="/CellGeneTheraphyNsgLibraryPrepartion" className="standard-back">
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
            src="../images/genomics/02_liquid_handling.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="liquid-handling-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Fontus"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="liquid-handling-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsJanus">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Janus"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="liquid-handling-3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsSciclone">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Sciclone"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="liquid-handling-4 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Bioqule"
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
            <Link to="/research-and-development">Research & Development</Link>
          </li>
          <li>
            <Link to="/research-solution">Research Solution</Link>
          </li>
          <li>
            <Link to="/cell-gene-theraphy">Cell & Gene Therapy</Link>
          </li>
          <li>
            <Link to="/cell-gene-theraphy-discovery-identification">
              Discovery-Identification to Lead Optimization
            </Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyNsgLibraryPrepartion">
              NSG Library Preparation
            </Link>
          </li>
          <li className="active">Liquid Handling Workstations</li>
        </ol>
      </div>

      {/* External JavaScript */}
      <script src="../js/jquery.js"></script>
      <script src="../js/functions.js"></script>
      <script src="../js/tab.js"></script>
      <script src="../js/uppertab.js"></script>
    </div>
  );
};

export default CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations;
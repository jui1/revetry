import React from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization = () => {
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
          <Link to="/CellGeneTheraphyPreclinicalDevelopment" className="standard-back">
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
            src="../images/clips/cell_analysis_bg.webm"
          />
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="row">
            <div>
              <div>
                <Link
                  className="subtab_cellcounting cellcounting-tab-1"
                  to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationCellecaMx"
                >
                  ISO-certified cell counting system
                  <br />
                  <br />
                  <p>
                    Accurate, ISO-certified cell counting solutions early in the R&D process help ensure consistent performance and remove variability throughout the drug cycle.
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  className="subtab_cellcounting cellcounting-tab-2"
                  to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays"
                >
                  Functional assays
                  <br />
                  <br />
                  <p>
                    Functional antibodies, recombinant proteins, and cell culture reagents produced under current Good Manufacturing Practices.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/ResearchSolution">Research Solution</Link></li>
          <li><Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link></li>
          <li><Link to="/CellGeneTheraphyPreclinicalDevelopment">Preclinical Development</Link></li>
          <li className="active">Cell Counting and Characterization</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization;
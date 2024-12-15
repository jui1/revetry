import React from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays = () => {
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
          <Link
            to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization"
            className="standard-back"
          >
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
            src="../images/functional-assays.webm"
          />
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Functional Assay 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="functional_assays_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Functional Assay 1"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Functional Assay 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="functional_assays_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Functional Assay 2"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Functional Assay 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="functional_assays_3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Functional Assay 3"
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
        <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/ResearchSolution">Research Solution</Link></li>
          <li><Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link></li>
          <li><Link to="/CellGeneTheraphyPreclinicalDevelopment">Preclinical Development</Link></li>
          <li>
            <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization">
              Cell Counting and Characterization
            </Link>
          </li>
          <li className="active">Functional Assay</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays;
import React from "react";
import { Link } from "react-router-dom";

const contentLinks = [
  "/CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems",
  "/CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors",
  "/CellGeneTheraphyManufacturingLabchipAav",
  "/CellGeneTheraphyManufacturingScaleupLentiviralVector",
  "/CellGeneTheraphyManufacturingLentiboostTransductionEnhancer",
  "/CellGeneTheraphyManufacturingBiolegendsGrade",
];

const CellGeneTheraphyManufacturingScaleup = () => {
  return (
    <div className="stretched">
      

      <div id="" className="clearfix">
        {/* Logo Section */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity Logo" />
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
            src="../images/manufacturing-scaleup.webm"
          />
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {contentLinks.map((link, index) => (
              <div key={index} className="col-md-4 col-sm-6 bottommargin">
                <div className={`manufacturing_scaleup_${index + 1} clearfix`}>
                  <div className="entry-image">
                    <Link to={link}>
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Life Science"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breadcrumb Section */}
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
          <li className="active">Manufacturing and Scale-Up</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyManufacturingScaleup;
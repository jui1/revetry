import React from 'react';
import { Link } from 'react-router-dom';

const CellGeneTheraphyAqQcNucleicAcidIsolation = () => {
  // Define the links in an array
  const contentLinks = [
    "/CellGeneTheraphyAqQcChemagic360",
    "/CellGeneTheraphyAqQcChemagicPrime",
    "/CellGeneTheraphyAqQcChemagicPrepitoInstrument",
    "#",
  ];

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/CellGeneTheraphyAqQc" className="standard-back">
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
            src="../images/02/03/5-1-Nucleic-acid.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Individual Content Blocks */}
            {contentLinks.map((link, index) => (
              <div className="col-md-4 col-sm-6 bottommargin" key={index}>
                <div className={`qaqc_nuclic_isolation_${index + 1} clearfix`}>
                  <div className="entry-image">
                    <Link to={link}>
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt={`Content ${index + 1}`}
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            <Link to="/ResearchAndDevelopment">Research & Development</Link>
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
          <li>
            <Link to="/CellGeneTheraphyAqQc">QA/QC</Link>
          </li>
          <li className="active">Nucleic Acid Isolation</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyAqQcNucleicAcidIsolation;

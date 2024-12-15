import React from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopment = () => {
  // Define the links and their titles
  const links = [
    { path: "/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization", title: "Cell Counting & Characterization" },
    { path: "/CellGeneTherapyOrganoidDevelopment", title: "Organoid Development" },
    { path: "/CellGeneTherapyCellImaging", title: "Cell Imaging" },
    { path: "/CellGeneTherapyInvivo", title: "In Vivo Studies" },
    { path: "/CellGeneTherapyLabchipAav", title: "LabChip AAV Analysis" },
  ];

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
          <Link to="/CellGeneTheraphy" className="standard-back">
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
            src="../images/preclinical-development.webm"
          />
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {links.map((link, index) => (
              <div className="col-md-4 col-sm-6 bottommargin" key={index}>
                <div className={`cellgene_preclinical_development_${index + 1} clearfix`}>
                  <div className="entry-image">
                    <Link to={link.path}>
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt={link.title}
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/ResearchSolution">Research Solution</Link></li>
          <li><Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link></li>
          <li className="active">Preclinical Development</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopment;

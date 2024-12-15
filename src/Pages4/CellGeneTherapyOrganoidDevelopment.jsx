import React from "react";
import { Link } from "react-router-dom";
const CellGeneTherapyOrganoidDevelopment = () => {
  return (
    <div className="stretched">
      

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo Section */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link
            to="/CellGeneTheraphyPreclinicalDevelopment"
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
            src="../images/clips/cell_analysis_bg.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="row">
            {/* Organoid Development Tabs */}
            <div>
              <div>
                <Link
                  className="subtab_organoid organoiddev-tab-1"
                  to="/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium"
                >
                  Xeno-free culture medium
                  <br />
                  <br />
                  <p>
                    Organoids generated in animal-free media show scalable
                    outcomes compared to xeno-cultures.
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  className="subtab_organoid organoiddev-tab-2"
                  to="/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute"
                >
                  Xeno-free serum substitute
                  <br />
                  <br />
                  <p>
                    Cells cultured in a xeno-free GMP-grade condition can
                    minimize lot-to-lot variability. Xeno-free serum substitute
                    can also lead to higher PBMC-derived T-cell expansion.
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  className="subtab_organoid organoiddev-tab-3"
                  to="/Organoids"
                >
                  High-throughput assays
                  <br />
                  <br />
                  <p>
                    Automated Preclinical research testing with prostate cancer
                    organoids to accelerate drug development.
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
          <li className="active">Organoids Development</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTherapyOrganoidDevelopment;
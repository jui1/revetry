import React, { useState } from "react";
import { Link } from "react-router-dom";
const InvivoLumina = () => {

    const [activeTab, setActiveTab] = useState("tab1");
 
  return (
      <div className="stretched">
        
        <div id="" className="clearfix">
          {/* Logo */}
          <div id="logo">
            <Link to="/" className="standard-logo">
              <img src="../images/logo.png" alt="revvity" />
            </Link>
          </div>

          {/* Back */}
          <div id="back">
            <Link to="/Invivo" className="standard-back">
              <img src="../images/back.png" alt="back" />
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
            <div className="tab_bg"></div>
            <ul className="tabs uppertab">
            <Link
              to="#tab1"
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => setActiveTab("tab1")}
            >
              Overview
            </Link>
              <p className="tab_btm_margin">
                In vivo imaging solutions start with our comprehensive portfolio
                of imaging reagents built around your applications.
              </p>
            </ul>

            <div id="tab1" className="tab_content uppertabcontent">
              <h1>In Vivo Imaging Reagents</h1>
              <img
                id="features_invivo"
                src="../images/imaging-reagents.png"
                alt="Features"
              />

              <div>
                <div>
                  <Link
                    className="subtab_invivo invivo-tab-1"
                    to="/InvivoLuminaBioluminescent"
                  >
                    Bioluminescent<br />reagents
                  </Link>
                </div>
                <div>
                  <Link
                    className="subtab_invivo invivo-tab-2"
                    to="/InvivoLuminaFluorescent"
                  >
                    Fluorescent<br />reagents
                  </Link>
                </div>
                <div>
                  <Link
                    className="subtab_invivo invivo-tab-3"
                    to="/InvivoLuminaContrast"
                  >
                    Contrast<br />agents
                  </Link>
                </div>
                <div>
                  <Link
                    className="subtab_invivo invivo-tab-4"
                    to="/InvivoLuminaRadionuclides"
                  >
                    Radioimaging<br />nuclides
                  </Link>
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
              <Link to="/ResearchAndDevelopment">
                Research & Development
              </Link>
            </li>
            <li>
              <Link to="/CellAnalysis">Cell Analysis</Link>
            </li>
            <li>
              <Link to="/Invivo">In-Vivo</Link>
            </li>
            <li className="active">In Vivo Imaging Reagents</li>
          </ol>
        </div>
      </div>
  );
};

export default InvivoLumina;
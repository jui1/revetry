import React, { useState } from "react";
import { Link } from "react-router-dom";

const InvivoLuminaContrast = () => {
  const [activeTab, setActiveTab] = useState("tab1");


  return (
    <div className="clearfix">
      {/* Logo Section */}
      <div id="logo">
        <Link to="/" className="standard-logo">
          <img src="../images/logo.png" alt="Revvity" />
        </Link>
      </div>

      {/* Back Button */}
      <div id="back">
        <Link to="/InvivoLumina" className="standard-back">
          <img src="../images/back.png" alt="Back" />
        </Link>
      </div>

      {/* Video Section */}
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

      {/* Tabs and Content Section */}
      <section id="content">
        <div className="tab_bg"></div>
        <ul className="tabs uppertab">
          <li>
            <Link
              to="#tab1"
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => setActiveTab("tab1")}
            >
              Overview
            </Link>
            <p className="tab_btm_margin">Study tissue perfusion and blood flow characteristics on ultrasound systems equipped with CEUS imaging modes with VesselVue® microbubble contrast agent. Using VesselVue in combination with Revvity’s exclusive Acoustic Angiography mode on the Vega® ultrasound system, a unique form of CEUS imaging, researchers can obtain high resolution images of microvessel density and morphology, which are biomarkers useful for studying angiogenesis and vascular bed development.</p>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Contrast Agents</h1>
            <img
              id="features"
              src="../images/03-Contrast-agents.png"
            />
          </div>
        )}


      </section>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/CellAnalysis">Cell Analysis</Link></li>
        <li><Link to="/Invivo">In-Vivo</Link></li>
        <li><Link to="/InvivoLumina">In Vivo Imaging Reagents</Link></li>
        <li className="active">Contrast Agents</li>
      </ol>
    </div>
  );
};

export default InvivoLuminaContrast;
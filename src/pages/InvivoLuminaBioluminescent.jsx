import React, { useState } from "react";
import { Link } from "react-router-dom";

const InvivoLuminaBioluminescent = () => {
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
            <p className="tab_btm_margin">Obtain more information from your target with Revvity’s wide range of IVISbrite™ bioluminescent reagents optimized on the IVIS® platform.</p>
            
          </li>
          <li>
          <p class="tab_btm_margin">• Bioluminescent substrates
          <br />• Bioluminescent tumor cell lines
				<br />• Bioluminescent bacteria
				<br />• Lentiviral particles</p>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Bioluminescent Reagents</h1>
            <img
              id="features"
              src="../images/01-Bioluminescent-reagents.png"
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
        <li className="active">Bioluminescent Reagents</li>
      </ol>
    </div>
  );
};

export default InvivoLuminaBioluminescent;
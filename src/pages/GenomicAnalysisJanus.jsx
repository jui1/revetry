import React, { useState } from "react";
import { Link } from "react-router-dom";

const GenomicAnalysisJanus = () => {
  // State to manage active tab and sub-tab
  const [activeTab, setActiveTab] = useState("overview"); // Default to 'Overview'
  const [activeSubTab, setActiveSubTab] = useState("pipetting"); // Default sub-tab for 'Features'

  return (
    <div className="clearfix">

      {/* Logo */}
      <div id="logo">
        <Link to="/" className="standard-logo">
          <img src="../images/logo.png" alt="revvity" />
        </Link>
      </div>

      {/* Back Button */}
      <div id="back">
        <Link to="/GenomicAnalysisLiquidHandlingWorkstations" className="standard-back">
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
        />
      </div>

      {/* Content Section */}
      <section id="content">
        <div className="tab_bg"></div>

        {/* Upper Tabs */}
        <ul className="tabs uppertab">
          <li>
            <Link
              to="#tab1"
              className={activeTab === "overview" ? "active" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </Link>
          </li>
          <p className="tab_btm_margin">
            The JANUS G3 workstation can be configured based on the size of the instrument, pipetting
            arm technology, labware movement options, and a number of other accessories to fully
            automate your application.
          </p>
          <li>
            <Link
              to="#tab2"
              className={activeTab === "features" ? "active" : ""}
              onClick={() => setActiveTab("features")}
            >
              Features
            </Link>
          </li>
        </ul>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>JANUS G3 Workstation</h1>
            <img
              id="features"
              src="../images/Janus Workstation.png"
              alt="JANUS G3 Workstation"
            />
          </div>
        )}

        {/* Features Tab with Sub-tabs */}
        {activeTab === "features" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <ul className="tabs">
              <li className="">
                <Link
                  to="#subtab1"
                  className={activeSubTab === "pipetting" ? "active subtab" : "subtab"}
                  onClick={() => setActiveSubTab("pipetting")}
                >
                  Pipetting Technology
                </Link>
              </li>
              <li>
                <Link
                  to="#subtab2"
                  className={activeSubTab === "integration" ? "active subtab" : "subtab"}
                  onClick={() => setActiveSubTab("integration")}
                >
                  Integration Module
                </Link>
              </li>
              <li>
                <Link
                  to="#subtab3"
                  className={activeSubTab === "drip" ? "active subtab" : "subtab"}
                  onClick={() => setActiveSubTab("drip")}
                >
                  Drip Solution
                </Link>
              </li>
            </ul>

            {/* Pipetting Technology Video */}
            {activeSubTab === "pipetting" && (
              <div id="subtab1">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/05_janus/pipetting_technology.webm"
                />
              </div>
            )}

            {/* Integration Module Video */}
            {activeSubTab === "integration" && (
              <div id="subtab2">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/05_janus/integration_module.webm"
                />
              </div>
            )}

            {/* Drip Solution Video */}
            {activeSubTab === "drip" && (
              <div id="subtab3">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/05_janus/drip_solution.webm"
                />
              </div>
            )}
          </div>
        )}
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
          <Link to="/GenomicAnalysis">Genomic Analysis</Link>
        </li>
        <li>
          <Link to="/GenomicAnalysisLiquidHandlingWorkstations">
            Liquid Handling Workstations
          </Link>
        </li>
        <li className="active">JANUS</li>
      </ol>
    </div>
  );
};

export default GenomicAnalysisJanus;

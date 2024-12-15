import React, { useState } from "react";
import { Link } from "react-router-dom";

const GenomicAnalysisSciclone = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeSubTab, setActiveSubTab] = useState("tab2-1");

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
            <Link to="#tab1" className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab('tab1')}>
              Overview
            </Link>
          </li>
          <p className="tab_btm_margin">
            Revvity's Sciclone® G3 liquid handling workstations can be configured to automate applications including genomics, proteomics, immunoassays, and cell-based assays.
          </p>
          <li>
            <Link to="#tab2" className={activeTab === "tab2" ? "active" : ""} onClick={() => setActiveTab('tab2')}>
              Features
            </Link>
          </li>
        </ul>

        {/* Overview Tab */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Sciclone® G3 Liquid Handling Workstations</h1>
            <img
              id="features"
              src="../images/Sciclone.png"
              alt="Sciclone® G3 Workstation"
            />
          </div>
        )}

        {/* Features Tab with Sub-tabs */}
        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <ul className="tabs">
              <li>
                <Link to="#" onClick={() => setActiveSubTab("tab2-1")}
                className={activeSubTab === "tab2-1" ? "active subtab" : "subtab"}
                >High-throughput microplate sample preparation</Link>
              </li>
              <li>
                <Link to="#" onClick={() => setActiveSubTab("tab2-2")}
                className={activeSubTab === "tab2-2" ? "active subtab" : "subtab"}
                >PRECISION Pippeting</Link>
              </li>
              <li>
                <Link to="#" onClick={() => setActiveSubTab("tab2-3")}
                className={activeSubTab === "tab2-3" ? "active subtab" : "subtab"}
                >Magnetic bead-based separation</Link>
              </li>
              <li>
                <Link to="#" onClick={() => setActiveSubTab("tab2-4")}
                className={activeSubTab === "tab2-4" ? "active subtab" : "subtab"}
                >Robotic tip storage</Link>
              </li>
              <li>
                <Link to="#" onClick={() => setActiveSubTab("tab2-5")}
                className={activeSubTab === "tab2-5" ? "active subtab" : "subtab"}
                >Easy Analysis</Link>
              </li>
            </ul>

            {/* Sub Tabs Content */}
            {activeSubTab === "tab2-1" && (
              <div id="tab2-1">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/07_sciclone/highthroughput_microplate_sample.webm"
                />
              </div>
            )}
            {activeSubTab === "tab2-2" && (
              <div id="tab2-2">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/07_sciclone/precision_pippeting.webm"
                />
              </div>
            )}
            {activeSubTab === "tab2-3" && (
              <div id="tab2-3">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/07_sciclone/magnetic_beadbased.webm"
                />
              </div>
            )}
            {activeSubTab === "tab2-4" && (
              <div id="tab2-4">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/07_sciclone/robotic_tip_storage.webm"
                />
              </div>
            )}
            {activeSubTab === "tab2-5" && (
              <div id="tab2-5">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/07_sciclone/easy_analysis.webm"
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
        <li className="active">Sciclone</li>
      </ol>
    </div>
  );
};

export default GenomicAnalysisSciclone;

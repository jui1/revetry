import React, { useState } from "react";
import { Link } from "react-router-dom";

const InvivoQuantum = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeSubTab, setActiveSubTab] = useState("tab2-1"); // Initialize with the first subtab

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

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
        <Link to="/Invivo" className="standard-back">
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
            <p className="tab_btm_margin">The Quantum GX3 - advanced microCT system for ex vivo and in vivo imaging. The versatile Quantum GX3 microCT offers the flexibility researchers need by delivering the functionality to perform longitudinal studies, across a wide range of species, with fast, low-dose scanning and superior spatial resolution.</p>
          </li>
          <li>
            <Link
              to="#tab2"
              className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
              onClick={() => {
                setActiveTab("tab2");
                setActiveSubTab("tab2-1"); // Reset subtab to first when switching to tab2
              }}
            >
              Features
            </Link>
          </li>
          <br />
          <li>
            <Link
              to="#tab3"
              className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"}
              onClick={() => {
                setActiveTab("tab3");
                setActiveSubTab("tab3-1"); // Reset subtab to first when switching to tab2
              }}
            >
              Applications
            </Link>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Quantum GX3 MicroCT Imaging System</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/02/02-cell-analysis/overview/11-quantum.webm"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <ul className="tabs">
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-1" ? "active" : ""}`}
                  to="#tab2-1"
                  onClick={() => handleSubTabClick("tab2-1")}
                >
                  Two Scanning Modes
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Five FOVs
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Active Ring Reduction
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Intiutive Software for Easy Adoption
                </Link>
              </li>
              
            </ul>

            {/* Subtab Video Content */}
            {activeSubTab === "tab2-1" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/11-quantum/01_Two_Scanning_Modes.webm"
              />
            )}
            {activeSubTab === "tab2-2" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/11-quantum/02_Five_FOVs.webm"
              />
            )}
            {activeSubTab === "tab2-3" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/11-quantum/03_Active_Ring_Reduction.webm"
              />
            )}
            {activeSubTab === "tab2-4" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/11-quantum/04_Intiutive_software_for_easy_adoption.webm"
              />
            )}
          </div>
        )}
        {/* Tab 3 */}
        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <ul className="tabs">
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-1" ? "active" : ""}`}
                  to="#tab3-1"
                  onClick={() => handleSubTabClick("tab3-1")}
                >
                  Lung Model
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-2" ? "active" : ""}`}
                  to="#tab3-2"
                  onClick={() => handleSubTabClick("tab3-2")}
                >
                  Lung and Cardiac Imaging
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-3" ? "active" : ""}`}
                  to="#tab3-3"
                  onClick={() => handleSubTabClick("tab3-3")}
                >
                  High Resolution Bone Imaging
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-4" ? "active" : ""}`}
                  to="#tab3-4"
                  onClick={() => handleSubTabClick("tab3-4")}
                >
                  Wide Range of applications
                </Link>
              </li>
              
            </ul>

            {/* Subtab Video Content */}
            {activeSubTab === "tab3-1" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/clips/quantum_lung_model.webm"
              />
            )}
            {activeSubTab === "tab3-2" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/clips/quantum_lung_Cardiac_imaging.webm"
              />
            )}
            {activeSubTab === "tab3-3" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/clips/quantum_high_resolution_bone_imaging.webm"
              />
            )}
            {activeSubTab === "tab3-4" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/clips/quantum_widerange.webm"
              />
            )}
          </div>
        )}


      </section>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/CellAnalysis">Cell Analysis</Link></li>
        <li><Link to="/Invivo">In-Vivo</Link></li>
        <li className="active">Quantum GX3</li>
      </ol>
    </div>
  );
};

export default InvivoQuantum
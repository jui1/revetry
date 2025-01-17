import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellImagingOperattaCls = () => {
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
        <Link to="/CellImaging" className="standard-back">
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
            <p className="tab_btm_margin">The all-new Operetta CLS delivers everything you need from the high-content analysis. What’s more, the Operetta CLS system is part of our comprehensive HCS workflow – everything from HCS systems and microplates to automation and informatics for every application. All from one knowledgeable, trusted vendor. Put that together with our Harmony® high-content imaging and analysis software – the easy-to-learn, easy-to-use software that empowers biologists to do their own analysis.</p>
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
          <br /> <li>
            <Link
              to="#tab3"
              className={activeTab === "tab3" ? "active" : ""}
              onClick={() => setActiveTab("tab3")}
            >
              Applications
            </Link>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>The Operetta CLS</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/02/02-cell-analysis/overview/06-operetta-CLS.webm"
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
                  Fast Switch 8X LED & High Power Illumination
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  User Exchangeable Bar Code
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Confocal Spinning Disc
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Large Format C-MOS Camera
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Water Immersion Objectives
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-6"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Fast Scanning
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-7"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Easy Access
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
                src="./images/02/02-cell-analysis/features/06-operetta-CLS/01_Fast_Switching.webm"
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
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/02_User_Exchangeable_Bar_Code.webm"
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
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/03_Confocal_Spinning_Disc.webm"
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
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/04_Large_Format_cmos_camera.webm"
              />
            )}
            {activeSubTab === "tab2-5" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/05_Water_Immersion.webm"
              />
            )}
            {activeSubTab === "tab2-6" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/06_Fast_Scanning.webm"
              />
            )}
            {activeSubTab === "tab2-7" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/02/02-cell-analysis/features/06-operetta-CLS/07_Easy_Access.webm"
              />
            )}
          </div>
        )}

        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/fixed_cell_assays.png" />
                    <p className="applicationsp">Fixed-cell assays</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/live_cell_assays.png" />
                    <p className="applicationsp">Live-cell assays</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/3D_cell_models.png" />
                    <p className="applicationsp">3D cell models</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/complex_cell_models.png" />
                    <p className="applicationsp">Complex cell models</p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/cell_painting.png" />
                    <p className="applicationsp">Cell painting</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/phenotypic_fingerprinting.png" />
                    <p className="applicationsp">Phenotypic fingerprinting</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="applications">
                    <img src="../images/cell-imaging/protein_protein_interaction_assays.png" />
                    <p className="applicationsp">Protein-protein interaction assays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/CellAnalysis">Cell Analysis</Link></li>
        <li><Link to="/CellImaging">Cellular Imaging & Analysis</Link></li>
        <li className="active">Operetta CLS</li>
      </ol>
    </div>
  );
};

export default CellImagingOperattaCls;
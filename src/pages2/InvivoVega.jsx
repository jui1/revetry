import React, { useState } from "react";
import { Link } from "react-router-dom";

const InvivoVega = () => {
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
            <p className="tab_btm_margin">Vega® is a hands-free, automated, high-throughput preclinical ultrasound imaging system that delivers high-resolution 2D and 3D ultrasound images in just a few minutes. This innovative in vivo ultrasound system removes the challenges associated with conventional hand-held systems through the use of automated transducers located under the imaging stage that’s easy to use, requires minimal training and produces more consistent results.</p>
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
            <h1>Vega® Preclinical Ultrasound</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/02/02-cell-analysis/overview/10-vega.webm"
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
                  3D Whitefiled
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Easy To Use
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  No Sonographer Required
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
                src="../images/02/02-cell-analysis/features/10-vega/01_3D_Whitefield.webm"
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
                src="../images/02/02-cell-analysis/features/10-vega/02_Easy_to_use.webm"
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
                src="../images/02/02-cell-analysis/features/10-vega/03_No_Sonographer_required.webm"
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
                  Kidney Vasculature
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-2" ? "active" : ""}`}
                  to="#tab3-2"
                  onClick={() => handleSubTabClick("tab3-2")}
                >
                  Tissue Stiffness
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab3-3" ? "active" : ""}`}
                  to="#tab3-3"
                  onClick={() => handleSubTabClick("tab3-3")}
                >
                  Cardiac
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
                src="../images/clips/vega_kidney_vasculature.webm"
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
                src="../images/clips/vega_tissue_stiffness.webm"
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
                src="../images/clips/vega_cardiac.webm"
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
        <li className="active">Vega</li>
      </ol>
    </div>
  );
};

export default InvivoVega;
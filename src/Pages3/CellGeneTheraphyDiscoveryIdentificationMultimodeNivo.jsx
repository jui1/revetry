import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyDiscoveryIdentificationMultimodeNivo = () => {
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
        <Link to="/CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader" className="standard-back">
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
            <p className="tab_btm_margin">VICTOR® Nivo™ packs all the latest major detection technologies in the industry’s smallest benchtop footprint. The perfect microplate reader for everyday biochemical and cell-based assays. It measures at any wavelength, with top and bottom reading for most standard technologies. With its ease of use software and remote access from almost any device, it is ideal for multiuser environments.</p>
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
              className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"}
              onClick={() => setActiveTab("tab3")}
            >
              Applications
            </Link>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>VICTOR® Nivo™ Multimode Plate Reader</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/02/02-cell-analysis/overview/08-victor-nivo.webm"
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
                  Simple To Use
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Multi Detection
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Rainbow Filter
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Top & Bottom Reading
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Temperature Control
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-6"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Stacker
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/01_Simple_to_use.webm"
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/02_Multidetection.webm"
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/03_Rainbow_Filter.webm"
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/04_Top_and_bottom_reading.webm"
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/05_Tem_control.webm"
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
                src="../images/02/02-cell-analysis/features/08-victor-nivo/06_Stacker.webm"
              />
            )}
          </div>
        )}

        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="row">
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">
                    Cell viability / Proliferation / Toxicity
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Drug screening</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Pathway analysis</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Receptor panning</p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Biomarkers</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Protein:protein interaction</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Food monitoring</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Epigenetics</p>
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
        <li><Link to="/ResearchSolution">Research Solution</Link></li>
        <li><Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link></li>
        <li><Link to="/CellGeneTheraphyDiscoveryIdentification">Discovery-Identification to Lead Optimization</Link></li>
        <li><Link to="/CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader">Microplate Readers</Link></li>
        <li className="active">VICTOR® Nivo</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationMultimodeNivo
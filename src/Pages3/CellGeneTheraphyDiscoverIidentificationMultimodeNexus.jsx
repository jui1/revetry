import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyDiscoverIidentificationMultimodeNexus = () => {
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
            <p className="tab_btm_margin">EnVision® Nexus™ is the next generation of superior detection. It operates on a brand-new innovative platform that fast tracks your research, delivering the speed and accuracy you need for your most demanding applications. The EnVision Nexus multimode plate reader continues to deliver optimal results from our Alpha, HTRF®, LANCE®, and DELFIA® assay technologies.</p>
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
            <h1>EnVision® Nexus™ Multimode Plate Reader</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/02/02-cell-analysis/overview/09-envision-nexus.webm"
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
                  Technology Available
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  High-throughput Data
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Stacker
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Fully Automation
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Powerful Software
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-6"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Optimize Reagents and Microplates
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
                src="../images/02/02-cell-analysis/features/09-envision-nexus/01_Technology_Available.webm"
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
                src="../images/02/02-cell-analysis/features/09-envision-nexus/02_Hightroughput_data.webm"
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
                src="./images/02/02-cell-analysis/features/09-envision-nexus/03_Stacker.webm"
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
                src="../images/02/02-cell-analysis/features/09-envision-nexus/04_Fully_Automation.webm"
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
                src="../images/02/02-cell-analysis/features/09-envision-nexus/05_Powerful_Software.webm"
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
                src="../images/02/02-cell-analysis/features/09-envision-nexus/06_Optimize_reagents_microplates.webm"
              />
            )}
          </div>
        )}

        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="row">
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">
                  Biomarker detection
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Protein kinase</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Cytokine</p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">GPCR</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Epigenetics</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Protein-protein interactions</p>
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
        <li className="active">EnVision® Nexus</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyDiscoverIidentificationMultimodeNexus
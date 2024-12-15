import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQcLabchipAav= () => {
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
          <Link to="/CellGeneTheraphyAqQc" className="standard-back">
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
              <p className="tab_btm_margin">• A microfluidic capillary electrophoresis-based solution
                  <br/>• Rapid, high-throughput empty/full analysis with a low volume AAV input
                  <br/>• Analyzes both ssDNA and proteins to quickly assess the concentration, purity, and empty/full ratio of the AAV capsid</p>
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
          </ul>
  
          {/* Tab Content */}
          {activeTab === "tab1" && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>LabChip AAV Empty Full Characterization</h1>
              <video
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/labchip/Labchip_Overview.webm"
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
                  Principle
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Advantage
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  AAV Analysis
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  High-Throughput
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Protein Separation
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-6"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Empty to full ration analysis
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
                src="../images/labchip/Labchip_AAV_Principle.webm"
              />
            )}
            {activeSubTab === "tab2-2" && (
              <div className="col-md-12">
              <div className="row">
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">AAV Samples (only 24 ul/sample needed)</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Reliable prediction of empty/full</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Partials estimation</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Purity assessment of viral proteins</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Genomic integrity of genomic insert (ssDNA)</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Purity of genomic insert</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Sizing of genomic insert</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Analysis Time – 1 Min</p>
                      </div>
                  </div>
              </div>										
          </div>
            )}
            {activeSubTab === "tab2-3" && (
              <div className="col-md-12">
              <div className="row">
                  <p className="applicationsp">AAV empty full analysis data</p>
                  <img id="features" autoplay="" muted="" controls="" loop="" playsinline="" src="../images/labchip/labchip_graph.png"></img>
              </div>										
          </div>
            )}
            {activeSubTab === "tab2-4" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/labchip/High-Throughput.webm"
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
                src="../images/labchip/Protein_Separation.webm"
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
                src="../images/labchip/Empty_to_full_ration_analysis.webm"
              />
            )}
          </div>
          )}

                    
                </section>

                {/* Breadcrumb */}
                <ol className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
                    <li><Link to="/ResearchSolution">Research Solution</Link></li>
                    <li><Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link></li>
                    <li><Link to="/CellGeneTheraphyPreclinicalDevelopment">Preclinical Development</Link></li>
                    <li><Link to="/CellGeneTheraphyAqQc">QA/QC</Link></li>
                    
                    <li className="active">LabChip AAV Empty Full Characterization</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyAqQcLabchipAav
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors= () => {
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
          <Link to="/CellGeneTheraphyManufacturingScaleup" className="standard-back">
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
              <p className="tab_btm_margin">• End-to-end rAAV solutions, backed by over 12 years of viral vector expertise streamline gene therapy development from capsule optimization to scalable 		manufacturing processes. 
              <br/>• A seamless transition to GMP-ready production, delivering tailor-made, regulation-compliant AAV vectors designed for the next wave of therapeutic innovation </p>
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
              <h1>Adeno-associated virus (AAV) vectors Services</h1>
              <img
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/adeno-associated-virus-vectors.png"
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
                  Key Advantages
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Development Capabilities
                </Link>
              </li>
             
            </ul>
  
            {/* Subtab Video Content */}
            {activeSubTab === "tab2-1" && (
              <div id="tab2-1">
              <div className="col-md-12">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="applicationswithoutimage">
                              <p className="applicationsp">Integrated Development</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="applicationswithoutimage">
                              <p className="applicationsp">Needs & Technology Focused</p>
                          </div>
                      </div>
                  </div>										
              </div>
          </div>
            )}
            {activeSubTab === "tab2-2" && (
              <div id="tab2-2">
              <div className="row">
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Therapeutic Expression Cassette Optimization</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">AAV Capsid Selection and Engineering</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Manufacturing technologies, process development and tech transfer</p>
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
                    <li><Link to="/CellGeneTheraphyManufacturingScaleup">CellGeneTheraphyManufacturingScaleup</Link></li>                   
                    <li className="active">LabChip AAV Empty Full Characterization</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors
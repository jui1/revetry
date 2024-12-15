import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems= () => {
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
              <p className="tab_btm_margin">From cellular screening and imaging applications to high-throughput screening and genomics-based applications, custom explorer™ G3 integrated workstations provide innovative application-focused laboratory automation solutions which simplify microplate handling, liquid handling, and detection.</p>
            </li>
            
           <br />
          </ul>
  
          {/* Tab Content */}
          {activeTab === "tab1" && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Integrated Automation Systems</h1>
              <video
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/integrated-lab-automation.webm"
              />
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
                    
                    <li className="active">Integrated Automation Systems</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems
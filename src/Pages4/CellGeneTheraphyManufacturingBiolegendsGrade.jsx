import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyManufacturingBiolegendsGrade= () => {
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
              <p className="tab_btm_margin">Designed to meet the rigorous standards of Good Manufacturing Practice (GMP), Cell-Vive GMP products support the growth and maintenance of a wide variety of cell types, including those crucial for therapeutic applications like CAR-T cell therapy.</p>
            </li>
            <li>
            <a href="#tab2">Features</a>
					<p className="tab_btm_margin">• Animal component-free or xeno-free manufacturing
					<br/>• Batch-to-batch consistency
					<br/>• Vendor qualification
					<br/>• Raw material traceability and documentation
					<br/>• Documented procedures and employee training

				</p>
            </li>
                <br />
            <li>
            </li>
          </ul>
  
          {/* Tab Content */}
          {activeTab === "tab1" && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>BioLegend's GMP-Grade Cell Culture Reagents</h1>
              <img
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/biolegends-grade-overview.png"
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
                    <li className="active">BioLegend's GMP-Grade Cell Culture Reagents</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyManufacturingBiolegendsGrade
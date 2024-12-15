import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyManufacturingScaleupLentiviralVector= () => {
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
              <p className="tab_btm_margin">• End-to-end solutions for developing LV vectors align with stringent regulatory standards. 
					<br/>• Expertise in complex vector designs for CAR T-cell therapies 
					<br/>• With over 12 years of experience and a keen eye on scientific and regulatory updates, 
					<br/>• Customizable services covering lentiviral vector backbones, therapeutic expression cassettes, and surface modifications, all crucial for successful ex vivo gene therapies.</p>
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
                Applications
              </Link>
            </li>
           <br />
          </ul>
  
          {/* Tab Content */}
          {activeTab === "tab1" && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Lentiviral (LV) Vector Services</h1>
              <img
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/scaleup-lentiviral-vector.png"
              />
            </div>
          )}
  
          {activeTab === "tab2" && (
            <div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Lentiviral vector backbone optimized for clinical application</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Therapeutic expression cassette development</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Lentiviral surface modification</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Manufacturing process tools and development</p>
                        </div>
                    </div>
                </div>										
            </div>
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
                    <li className="active">Scaleup Lentiviral Vector</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyManufacturingScaleupLentiviralVector
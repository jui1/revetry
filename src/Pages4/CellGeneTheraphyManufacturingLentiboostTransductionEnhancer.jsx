import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyManufacturingLentiboostTransductionEnhancer= () => {
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
              <p className="tab_btm_margin">• The new Gold Standard for Clinical 
					<br/>• To increase the efficiency of lentiviral transduction by up to 90%
					<br/>• Designed for both in vitro use and ex vivo cell therapy applications</p>
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
              <h1>LentiBOOST Transduction Enhancer</h1>
              <img
                id="features"
                autoPlay
            muted
            loop
            playsInline
                src="../images/lentiboost-transduction-enhancer.png"
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
                  Mode of action
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Benefits
                </Link>
              </li>
          
            </ul>
  
            {/* Subtab Video Content */}
            {activeSubTab === "tab2-1" && (
              <img
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/lentiboost-transduction-enhancer-features.png"
              />
            )}
            {activeSubTab === "tab2-2" && (
                            <img
                            id="features"
                            autoPlay
                            muted
                            controls
                            loop
                            playsInline
                            src="../images/lentiboost-transduction-enhancer-features-2.png"
                          />
            )}
         
          </div>
          )}

{activeTab === "tab3" && (
            <div id="tab3" className="tab_content uppertabcontent">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Mustang Bio: X-linked severe combined immunodeficiency</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">Orchard Therapeutics: Rare Diseases</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">National Institute of Allergy and Infectious Diseases: X-linked severe combined immunodeficiency</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="applicationswithoutimage">
                            <p className="applicationsp">University of California San Francisco: Artemis-deficient Severe Combined Immunodeficiency </p>
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
                    <li className="active">Lentiboost Transduction Enhancer</li>
                </ol>
            </div>
    );
}

export default CellGeneTheraphyManufacturingLentiboostTransductionEnhancer
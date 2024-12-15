import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo = () => {
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
        <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays" className="standard-back">
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
            <p className="tab_btm_margin">GoInVivo™ products focus on targeting immune checkpoints. Tumor cells can express high levels of these checkpoint receptors, shutting down immune responses and taking advantage of the lack of inflammation</p>
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
            <h1>GoInVivo™ antibodies</h1>
            <img
              id="features"
              src="../images/goinvivo-antibodies.png"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
          <div className="col-md-12">
            <div className="row">
              {/* First Row */}
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Flow cytometry quality testing</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Super low endotoxin, ≤ 1.0 EU/mg</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Low aggregation, {"<"} 3%</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Pathogen-free</p>
                </div>
              </div>
    
              {/* Clearfix */}
              <div className="clearfix"></div>
    
              {/* Second Row */}
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">
                    Bulk sizing (5 mg, 25 mg, 50 mg, 100 mg, 500 mg, 1 g sizes)
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">
                    Concentration between 1 mg/ml and 3 mg/ml
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Sodium azide and preservative-free</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">Custom sizes available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

      </section>
      <ol className="breadcrumb">
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/ResearchAndDevelopment">Research & Development</Link>
          </li>
          <li>
            <Link to="/ResearchSolution">Research Solution</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyPreclinicalDevelopment">
            Preclinical Development
            </Link>
          </li>
          <li>
            <Link to="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays">
              Therapeutic Payload and Delivery
            </Link>
          </li>
        <li className="active">GoInVivo™ antibodies</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo
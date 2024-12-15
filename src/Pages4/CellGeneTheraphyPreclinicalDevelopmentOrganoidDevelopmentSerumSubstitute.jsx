import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute= () => {
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
        <Link to="/CellGeneTherapyOrganoidDevelopment" className="standard-back">
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
            <p className="tab_btm_margin">• Xeno-Free Serum Substitute GMP 
				<br/>• Specifically formulated to support PBMC-derived T and NK cell expansion
				<br/>• Provide equal or higher specific cell numbers compared to the use of human AB serum</p>
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
            <h1>Xeno-free serum substitute</h1>
            <img
              id="features"
              src="../images/serum-substitute.png"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
          <div className="col-md-12">
              <div className="row">
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">A xeno-free</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Serum-free formulation</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Cobmined with the basal media of choice, such as IMDM</p>
                      </div>
                  </div>
              </div>										
          </div>
      </div>
        )}

{activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
          <div className="col-md-12">
              <div className="row">
                  <div className="col-md-3">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Suitable for use in combination with several T cell activation methods</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">Able to support T cell populations (CD4, CD8) comparable to human AB serum</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">To increase naïve T cell numbers</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="applicationswithoutimage2">
                          <p className="applicationsp">For use in research and further manufacturing</p>
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
            <Link to="/OrganoidsDevelopment">
            Organoids Development
            </Link>
          </li>
        <li className="active">Xeno-free serum substitute</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute
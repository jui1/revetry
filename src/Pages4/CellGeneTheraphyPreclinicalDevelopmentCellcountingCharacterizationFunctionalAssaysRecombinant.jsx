import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant= () => {
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
            <p className="tab_btm_margin">Our portfolio includes over 2,000 bioactive human, mouse, and rat recombinant proteins developed in-house.</p>
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
            <h1>Recombinant Proteins</h1>
            <img
              id="features"
              src="../images/recombinant-proteins.png"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
          <div className="col-md-12">
              <div className="row">
                  <div className="col-md-12">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Recombinant proteins produced under Current Good Manufacturing Practices (cGMP) can be used for cell expansion, polarization, and differentiation , and various ex vivo cell processing applications.</p>
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
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Immunology</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Neuroscience</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Stem cell research</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Cancer research</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="applicationswithoutimage">
                          <p className="applicationsp">Cell and gene therapy</p>
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

export default CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution = () => {
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
        <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryDelivery" className="standard-back">
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
            <p className="tab_btm_margin"></p>
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
            <h1>Directed Evolution of AAV Capsids</h1>
            <img
              id="features"
              src="../images/directed-evolution.png"
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
                  Building blocks of our directed evolution projects
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Our new site in Heidelberg
                </Link>
              </li>
              
            </ul>

            {/* Subtab Video Content */}
            {activeSubTab === "tab2-1" && (
              <img
                id="features"
                src="../images/directed-evolution-feature-1.png"
              />
            )}
            {activeSubTab === "tab2-2" && (
              <img
                id="features"
                src="../images/directed-evolution-feature-2.png"
              />
            )}
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
            <Link to="/CellGeneTheraphyTherapeuticPayloadDelivery">
              Therapeutic Payload and Delivery
            </Link>
          </li>
        <li className="active">TDirected Evolution of AAV Capsids</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution
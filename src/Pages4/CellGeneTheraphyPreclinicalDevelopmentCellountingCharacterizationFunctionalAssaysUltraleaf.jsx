import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf = () => {
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
            <p className="tab_btm_margin">• High quality and greater than 95% purity determined by IEF and SDS-PAGE 
				<br/>• Filtered through 0.2 μm under sterile conditions 
				<br/>• All antibodies backed by our 100% satisfaction guarantee 
				<br/>• Outstanding pricing </p>
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
            <h1>LEAF™ and Ultra-LEAF™ antibodies</h1>
            <img
              id="features"
              src="../images/ultraleaf-antibodies.png"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
          <div className="col-md-12">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-6">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">
                    <span className="bold">LEAF™ Purified Antibodies</span>
                  </p>
                  <p>
                    • Endotoxin level is {"<"} 0.1 EU/μg of the protein (
                    {"<"} 0.01 ng/μg of the protein) as determined by the LAL test.
                    <br />
                    • Excellent selection of over 340 antibodies, including isotype
                    controls.
                  </p>
                </div>
              </div>
    
              {/* Column 2 */}
              <div className="col-md-6">
                <div className="applicationswithoutimage">
                  <p className="applicationsp">
                    <span className="bold">Ultra-LEAF™ Purified Antibodies</span>
                  </p>
                  <p>
                    • Endotoxin level is {"<"} 0.001 ng/μg of the protein as
                    determined by the LAL test.
                    <br />
                    • For highly sensitive assays or where large volumes of
                    antibody are needed.
                    <br />
                    • Over 50 antibodies available in 100 μg and 1 mg sizes.
                  </p>
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
        <li className="active">Therapeutic Payload</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf
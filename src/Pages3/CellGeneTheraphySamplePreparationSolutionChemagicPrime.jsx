import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphySamplePreparationSolutionChemagicPrime = () => {
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
        <Link to="/CellGeneTheraphySamplePreparationSolution" className="standard-back">
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
            <p className="tab_btm_margin">A fully automated research solution for primary sample transfer, DNA and RNA isolation, optional normalization, and PCR setup applications, that offers streamlined, walk-away sample processing.</p>
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
              className={activeTab === "tab3" ? "active" : ""}
              onClick={() => setActiveTab("tab3")}
            >
              Applications
            </Link>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Chemagic Prime</h1>
            <img
              id="features"
              src="../images/chemagic-prime.png"
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
                  Automated Barcode Reader
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Primary Sample Handling
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Walk away Automation
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Fully Integrated
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Double Sample Set
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-6" ? "active" : ""}`}
                  to="#tab2-6"
                  onClick={() => handleSubTabClick("tab2-6")}
                >
                  Integrated Dispensor
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-7" ? "active" : ""}`}
                  to="#tab2-7"
                  onClick={() => handleSubTabClick("tab2-7")}
                >
                  Eliminate Cross Contamination
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-8" ? "active" : ""}`}
                  to="#tab2-8"
                  onClick={() => handleSubTabClick("tab2-8")}
                >
                  Chemagic Performance
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-9" ? "active" : ""}`}
                  to="#tab2-9"
                  onClick={() => handleSubTabClick("tab2-9")}
                >
                  Output Format
                </Link>
              </li>
            </ul>

            {/* Subtab Video Content */}
            {activeSubTab === "tab2-1" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Automated_Barcode_Reader.webm"
              />
            )}
            {activeSubTab === "tab2-2" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Primary_Sample_Handling.webm"
              />
            )}
            {activeSubTab === "tab2-3" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Walk_away_automation.webm"
              />
            )}
            {activeSubTab === "tab2-4" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Fully_Integrated.webm"
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
                src="../images/chemagic_prime/Double_Sample_Set.webm"
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
                src="../images/chemagic_prime/Integrated_Dispensor.webm"
              />
            )}
            {activeSubTab === "tab2-7" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Eliminate_Cross_Contamination.webm"
              />
            )}
            {activeSubTab === "tab2-8" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/chemagic_performance.webm"
              />
            )}
            {activeSubTab === "tab2-9" && (
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/chemagic_prime/Output_Format.webm"
              />
            )}
          </div>
        )}

        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="row">
              <div className="col-md-6">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">
                  Genomic DNA and RNA isolation from blood, cells, saliva and tissue for biobanking
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Isolation of viral/bacterial nucleic acids from serum plasma pools</p>
                </div>
              </div>
              <div className="clearfix"></div>

              <div className="col-md-6">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Processing human body fluids for research applications</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Extraction of high molecular weight DNA for long read sequencing</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="applicationswithoutimage2">
                  <p className="applicationsp">Isolation of DNA from various samples for microbiome analysis</p>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </section>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/ResearchSolution">Research Solution</Link></li>
        <li><Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link></li>
        <li><Link to="/CellGeneTheraphyDiscoveryIdentification">Discovery-Identification to Lead Optimization</Link></li>
        <li><Link to="/CellGeneTheraphySamplePreparationSolution">Sample Peparation Solution</Link></li>
        <li className="active">chemagic™ 360</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphySamplePreparationSolutionChemagicPrime;
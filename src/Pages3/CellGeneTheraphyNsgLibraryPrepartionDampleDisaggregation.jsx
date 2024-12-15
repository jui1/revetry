import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation = () => {
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
        <Link to="/CellGeneTheraphyNsgLibraryPrepartion" className="standard-back">
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
            <p className="tab_btm_margin">The Bead Ruptor Elite Homogenizer is designed with a unique carriage motion coupled with sample specific bead beating material ensure that a thorough homogenate is achieved regardless of sample type. The intra-tube bead movement reduces swirling and results in the higher bead impact forces compared to other bead mills on the market. The increased power of the Bead Ruptor Elite Homogenizer decreases processing time and reduces sample heating to maximize sample preparation efficiency.</p>
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
            <h1>Sample Disaggregation</h1>
            <video
          id="features"
          autoPlay
          muted
          loop
          playsInline
          src="../images/genomics/01_sample_disaggregation/sample_disaggregation_overview.webm"
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
                  Things to be considered
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                >
                  Principle
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                >
                  Dissociation Phases
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                >
                  Dissociation Efficiency
                </Link>
              </li>
              <li>
                <Link
                  className={`subtab ${activeSubTab === "tab2-5" ? "active" : ""}`}
                  to="#tab2-5"
                  onClick={() => handleSubTabClick("tab2-5")}
                >
                  Sample Type
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
                src="../images/genomics/01_sample_disaggregation/01_Things_tobe_considered.webm"
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
                src="../images/genomics/01_sample_disaggregation/02_Principle.webm"
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
                src="../images/genomics/01_sample_disaggregation/03_Dissociation_Phases.webm"
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
                src="../images/genomics/01_sample_disaggregation/04_Dissociation_Efficiency.webm"
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
                src="../images/genomics/01_sample_disaggregation/05_Sample_Type.webm"
              />
            )}
          </div>
        )}

        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="col-md-12">
					<div className="row">
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Increased mRNA yield from skin samples using Omni International Bead Ruptor 24</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Protein Extraction from Hard and Soft Tissue Samples</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Drosophila melanogaster Protein and DNA Extractions</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Genomic DNA Extraction From Plant Tissues</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Detection of Bacterial 16S rDNA Gene from Soil</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Purification of Total RNA from Porcine Skin</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Nucleic Acid Extraction from Mus musculus Tissues</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Homogenization of Bat Tissues and Hair with the Bead Ruptor Elite</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">DNA isolation from Plant Tissues</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage2">
								<p className="applicationsp">Budding Yeast Homogenization: Reproducible Protein Extracts with Protein Functioned Retained</p>
							</div>
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
        <li><Link to="/CellGeneTheraphyNsgLibraryPrepartion">NSG library prepartion</Link></li>
        <li className="active">Sample Disaggregation</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation;
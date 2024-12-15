import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior = () => {
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
            <p className="tab_btm_margin">A fully automated workflow from primary sample to ready to use high-quality DNA and RNA. Reliable and easy to operate, excellent DNA/ RNA recovery from diverse sample matrices. Proven liquid handling technology reduces hands-on time and eliminates sample variations a maximum capacity of 48 samples of up to 1000 μl body fluids</p>
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
            <h1>Chemagic Prime Junior</h1>
            <img
              id="features"
              src="../images/chemagic-prime-junior.png"
            />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
					<div className="row">
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Chemagen separation technology for high-quality DNA/RNA</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Customizable to your needs: Complete workflow from primary sample to assay setup</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Suitable for diverse samples like bloods, plasma, saliva, urine, swabs, feces, etc.</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Walk-away automation for up to 48 samples</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Customizable to your needs: Pipetting, eluate transfer, normilization, assay, PCR, NGS setup</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Janus G3 technology for reliable pepetting and setup capabilities</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Sutiable for even challenging applications e.g., long-read sequencing, MLPA, etc.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">CE-IVD cerified version available for in vitro diagnostic applications*</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">No waste of reagents due to buffer dispensing according to the number of samples</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Intuitive WinPREP software for easy operation</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Full traceability at any time during the process: Barcode tracking and LIMS compatible</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Optional add-ons: UV light and 2D barcode reader</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Size 1.9m x 0.87 x 1.70m (L/W/H)</p>
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
								<p className="applicationsp">Blood</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Buffy coat</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">DBS</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Saliva</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Swabs</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Cells</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Tissue/FFPE</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Urine</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Stool</p>
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
        <li><Link to="/CellGeneTheraphySamplePreparationSolution">Sample Peparation Solution</Link></li>
        <li className="active">Chemagic Prime Junior</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior;
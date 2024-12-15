import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus = () => {
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
            <p className="tab_btm_margin">Automated NGS library preparation does not have to be complicated. Release the power of our next-generation Fontus™ NGS automated liquid handling workstation and transform your NGS library preparation.</p>
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
            <h1>Fontus™ NGS Automated Liquid Handling Workstation</h1>
            <img
          id="features"
          src="../images/04-fontus.png"
        />
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
					<div className="row">
						<div className="col-md-4">
							<div className="fontusapplications">
								<video className="featureicons" autoplay="" muted="" loop="" playsinline="" src="../images/icon_1.webm"></video>
								<p className="applicationsp">The power of simplicity.</p>
								<p className="featurespara">With the Fontus NGS workstation, NGS library prep has never been easier. Its pre-designed NGS configurations, vendor-qualified library of automated methods, user-friendly software and reformatting capabilities help you breeze through library prep with none of the head-scratching. Choose from up to 8, 96 or 384 sample pipetting options to suit your needs—all optimized for NGS applications.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="fontusapplications">
								<video className="featureicons" autoplay="" muted="" loop="" playsinline="" src="../images/icon_2.webm"></video>
								<p className="applicationsp">The power of reliability.</p>
								<p className="featurespara">Built on the strong foundations of our trusted Sciclone® and Zephyr® technologies, the Fontus NGS workstation takes automated NGS library prep to the next level with a robust system with expanded capabilities that just keeps on performing. Make downtime a thing of the past with our 35 years’ industry experience and watertight collaborations with leading NGS kit vendors behind you.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="fontusapplications">
								<video className="featureicons" autoplay="" muted="" loop="" playsinline="" src="../images/icon_3.webm"></video>
								<p className="applicationsp">The power of support.</p>
								<p className="featurespara">With Revvity, you have a powerful, reliable NGS team behind you, dedicated to getting you up and running and helping to develop your NGS workflows so you can breathe easy</p>
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
								<p className="applicationsp">Get up and running faster than ever before with verified NGS protocols.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Safeguard projects with reliable automation and support that will not let you down.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Customizable to fit your needs, now and in the future.</p>
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
        <li className="active">Fontus Workstation</li>
      </ol>
    </div>
  );
};

export default CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus
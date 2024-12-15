import React, { useState } from "react";
import { Link } from "react-router-dom";

const BioQuleNGSSystem = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="clearfix">
      {/* Logo */}
      <div id="logo">
        <Link to="/" className="standard-logo">
          <img src="../images/logo.png" alt="revvity" />
        </Link>
      </div>

      {/* Back Button */}
      <div id="back">
        <Link to="/genomic-analysis-liquid-handling-workstations" className="standard-back">
          <img src="../images/back.png" alt="back" />
        </Link>
      </div>

      {/* Home Banner */}
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

      {/* Content Section */}
      <section id="content">
        <div className="tab_bg"></div>
        <ul className="tabs uppertab">
          <li>
            <Link to="#tab1" className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab('tab1')}>
              Overview
            </Link>
          </li>
          <p className="tab_btm_margin">
            Reimagine low-throughput library prep with the BioQule™ NGS System and simplify your library prep and quantitation with walk-away automation.
          </p>
          <li>
            <Link to="#tab2" className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"} onClick={() => setActiveTab('tab2')}>
              Features
            </Link>
          </li>
          <br /><li>
            <Link to="#tab3" className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"} onClick={() => setActiveTab('tab3')}>
              Applications
            </Link>
          </li>
        </ul>

        {/* Overview Tab */}
        {activeTab === "tab1" && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>BioQule™ NGS System</h1>
            <img
              id="features"
              src="../images/bioqule.png"
              alt="BioQule™ NGS System"
            />
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "tab2" && (
          <div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">No expertise needed: usable by any lab or technician</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">Open system able to automate different applications</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">Requires only 10 ng of starting material (others require 50 ng or more)</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">Cost-effective alternative to expensive NGS library preparation solutions</p>
                    <p className="featurespara alileft">
                      • Full automation: only 15 minutes of hands-on time (HOT); 80% lesser in comparison
                      <br />• In-built quantification of the NGS libraries it creates
                      <br />• Reduced human error: 99% pass rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "tab3" && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">Automating low throughput Illumina® DNA Prep on the BioQule™ NGS System</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="applicationswithoutimage">
                    <p className="applicationsp">Automating low throughput Roche® KAPA® HyperPrep™ kit on the BioQule™ NGS System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Breadcrumb */}
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
          <Link to="/GenomicAnalysis">Genomic Analysis</Link>
        </li>
        <li>
          <Link to="/GenomicAnalysisLiquidHandlingWorkstations">
            Liquid Handling Workstations
          </Link>
        </li>
        <li className="active">BioQule</li>
      </ol>
    </div>
  );
};

export default BioQuleNGSSystem;

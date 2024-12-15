import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GenomicAnalysisFontus = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // default to tab1

  return (
    <div className="stretched">

      {/* Wrapper */}
      <div id="" className="clearfix">

        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/GenomicAnalysisLiquidHandlingWorkstations" className="standard-back">
            <img src="../images/back.png" alt="back" />
          </Link>
        </div>

        {/* Home Banner with Video */}
        <div id="home-banner">
          <video id="home-video" autoPlay muted loop playsInline src="../images/clips/cell_analysis_bg.webm" />
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            {/* Tab Links */}
            <Link to="#tab1" 
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => setActiveTab('tab1')}>Overview</Link>
            <p className="tab_btm_margin">
              Automated NGS library preparation does not have to be complicated. Release the power of our next-generation Fontus™ NGS automated liquid handling workstation and transform your NGS library preparation.
            </p>
            <Link to="#tab2" onClick={() => setActiveTab('tab2')} 
            className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}>Features</Link>
            <br />
            <Link to="#tab3" onClick={() => setActiveTab('tab3')} 
            className={activeTab === "tab3" ? "active" : ""}
            >Applications</Link>
          </ul>

          {/* Tab 1 Content - Overview */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Fontus™ NGS Automated Liquid Handling Workstation</h1>
              <img id="features" autoPlay muted controls loop playsInline src="../images/04-fontus.png" alt="Fontus NGS Workstation" />
            </div>
          )}

          {/* Tab 2 Content - Features */}
          {activeTab === 'tab2' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="fontusapplications">
                      <video className="featureicons" autoPlay muted loop playsInline src="../images/icon_1.webm"></video>
                      <p className="applicationsp">The power of simplicity.</p>
                      <p className="featurespara">
                        With the Fontus NGS workstation, NGS library prep has never been easier. Its pre-designed NGS configurations, vendor-qualified library of automated methods, user-friendly software, and reformatting capabilities help you breeze through library prep with none of the head-scratching.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="fontusapplications">
                      <video className="featureicons" autoPlay muted loop playsInline src="../images/icon_2.webm"></video>
                      <p className="applicationsp">The power of reliability.</p>
                      <p className="featurespara">
                        Built on the strong foundations of our trusted Sciclone® and Zephyr® technologies, the Fontus NGS workstation takes automated NGS library prep to the next level with a robust system that just keeps on performing.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="fontusapplications">
                      <video className="featureicons" autoPlay muted loop playsInline src="../images/icon_3.webm"></video>
                      <p className="applicationsp">The power of support.</p>
                      <p className="featurespara">
                        With Revvity, you have a powerful, reliable NGS team behind you, dedicated to getting you up and running and helping to develop your NGS workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3 Content - Applications */}
          {activeTab === 'tab3' && (
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

        {/* Breadcrumb */}
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/GenomicAnalysis">Genomic Analysis</Link></li>
          <li><Link to="/GenomicAnalysisLiquidHandlingWorkstations">Liquid Handling Workstations</Link></li>
          <li className="active">Fontus</li>
        </ol>

      </div>
    </div>
  );
};

export default GenomicAnalysisFontus;

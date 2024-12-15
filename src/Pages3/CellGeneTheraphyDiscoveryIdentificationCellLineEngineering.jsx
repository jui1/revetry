import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyDiscoveryIdentificationCellLineEngineering = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeSubTab, setActiveSubTab] = useState('tab2-1');

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        <div id="back">
          <Link to="/CellGeneTheraphyDiscoveryIdentification" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

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

        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            <li >
              <Link to="#tab1"
               
               className={activeTab === "tab1" ? "active" : ""}
               onClick={() => setActiveTab("tab1")}
              >Overview</Link>
            </li>
            <p className="tab_btm_margin">
            Unlock the full potential of your research with our expertly engineered cell lines. At the heart of breakthrough therapies and groundbreaking studies lie our precision-crafted cell models. Whether you're delving into disease mechanisms, evaluating drug candidates, or exploring gene functions, our cell line engineering services offer enhanced efficiency. With our state-of-the-art CRISPR technology and deep expertise, we support you in pushing the boundaries of what's possible in scientific discovery and therapeutic development. Let's transform your vision into reality, one cell at a time.
            </p>
            
          </ul>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Cell-line engineering</h1>
              <img id="features" src="../images/cell-line-engineering.png" alt="Mimix Reference Standards" />
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
        <li className="active">Cell Line Engineering</li>
      </ol>
      </div>

      {/* External JavaScripts can be handled using hooks like useEffect */}
      {/* Add your scripts here if necessary */}
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationCellLineEngineering
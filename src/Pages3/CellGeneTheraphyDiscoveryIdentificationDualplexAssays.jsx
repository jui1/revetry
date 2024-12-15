import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyDiscoveryIdentificationDualplexAssays = () => {
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
            • Leverage the pioneering Alpha technology
				<br/>• To measure multiple analytes within a single sample
				<br/>• To optimize your laboratory's throughput without compromising on precision
				<br/>• Our Dualplex Assays streamline workflows, reduce sample volume requirements, and offer enhanced specificity.
            </p>
            
          </ul>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Dualplex Assays</h1>
              <img id="features" src="../images/dualplex-assays.png" alt="Mimix Reference Standards" />
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
        <li className="active">Dualplex Assays</li>
      </ol>
      </div>

      {/* External JavaScripts can be handled using hooks like useEffect */}
      {/* Add your scripts here if necessary */}
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationDualplexAssays
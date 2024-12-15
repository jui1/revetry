import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyDiscoveryIdentificationMimixPanel = () => {
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
            Revvity Mimix Reference Standards are all cell-line derived to maintain genomic coverage across the molecular diagnostics workflow.
            </p>
            <li >
              <Link 
               to="#tab2"
               className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
               onClick={() => setActiveTab("tab2")}
              >Features</Link>
            </li>
            
          </ul>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Mimix™ reference standards</h1>
              <img id="features" src="../images/mimix.png" alt="Mimix Reference Standards" />
            </div>
          )}

          {activeTab === 'tab2' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
					<div className="row">
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Cell-line derived controls to maintain genomic complexity</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Confirmation of limits of detection</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Help reduce false positives and negatives</p>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Enhance quality during assay development and manufacture</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Verification and optimization of end-to-end workflows</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="applicationswithoutimage">
								<p className="applicationsp">Robust routine monitoring</p>
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
        <li className="active">Mimix Panel</li>
      </ol>
      </div>

      {/* External JavaScripts can be handled using hooks like useEffect */}
      {/* Add your scripts here if necessary */}
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationMimixPanel
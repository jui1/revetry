import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellCountingCellecaPlx = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <div className="stretched">
         
    
          <div id="" className="clearfix">
            {/* Logo */}
            <div id="logo">
              <Link to="/" className="standard-logo">
                <img src="../images/logo.png" alt="Revvity" />
              </Link>
            </div>
    
            {/* Back Button */}
            <div id="back">
              <Link to="/CellCounting" className="standard-back">
                <img src="../images/back.png" alt="Back" />
              </Link>
            </div>
    
            {/* Home Banner Video */}
            <div id="home-banner">
              <video
                id="home-video"
                autoPlay
                muted
                loop
                playsInline
                src="../images/clips/cell_analysis_bg.webm"
              ></video>
            </div>
    
            {/* Content Section */}
            <section id="content">
              <div className="tab_bg"></div>
    
              {/* Tabs */}
              <ul className="tabs uppertab">
                <Link
                  to="#tab1"
                  onClick={() => setActiveTab('tab1')}
                  className={activeTab === 'tab1' ? 'active' : ''}
                >
                  Overview
                </Link>
                <p className="tab_btm_margin">
                The Cellaca PLX image cytometer is a cutting-edge solution to revolutionize cell analysis workflows, enabling you to count cells at high-speed, assess cell purity, analyze apoptosis functionality, and simultaneously measure viability on multiple samples – all right at the lab bench. 
                </p>
                <Link
                  to="#tab2"
                  onClick={() => setActiveTab('tab2')}
                  className={activeTab === 'tab2' ? 'active tab_btm_margin' : 'tab_btm_margin'}
                >
                  Features
                </Link>
                <br />
                <Link
                  to="#tab3"
                  onClick={() => setActiveTab('tab3')}
                  className={activeTab === 'tab3' ? 'active' : ''}
                >
                  Applications
                </Link>
              </ul>
    
              {/* Tab Content */}
              {activeTab === 'tab1' && (
                <div id="tab1" className="tab_content uppertabcontent">
                  <h1>Cellaca PLX</h1>
                  <img
                    id="features"
                    src="../images/celleca.png"
                  ></img>
                </div>
              )}
    
              {activeTab === 'tab2' && (
                <div id="tab2" className="tab_content uppertabcontent">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">Easily perform rapid subpopulation analysis in seconds</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">Enhance your workflow efficiency</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">
                        Equipped with a 21 CFR Part 11 module for regulated environments
                        </p>
                      </div>
                    </div>
						<div class="clearfix"></div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">
                        Determine crucial information about the percentage of live and dead cells within your transfected or transduced cell population 
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">Leverage the instrument’s multiplexing capability, utilizing four channels, to obtain viability readouts in just one minute per sample – without compromising sensitivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
    
              {activeTab === 'tab3' && (
                <div id="tab3" className="tab_content uppertabcontent">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">
                        Multiple cell surface marker detection
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">Cell and gene therapy research</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">Low autofluorescence detection</p>
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
                <Link to="/CellAnalysis">Cell Analysis</Link>
              </li>
              <li>
                <Link to="/CellCounting">Cell Health & Viability</Link>
              </li>
              <li className="active">Cellaca MX</li>
            </ol>
          </div>
        </div>
      );
}

export default CellCountingCellecaPlx
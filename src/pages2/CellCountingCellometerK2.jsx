import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellCountingCellometerK2 = () => {
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
              This versatile solution is designed for use with messy samples with significant debris,
              heterogeneous samples, or samples containing a low concentration of cells.
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
              <h1>Cellometer K2</h1>
              <video
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/clips/cellometer_k2.webm"
              ></video>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="row">
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">21 CFR Part 11 compliance</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Switching from manual to automated cell counting</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                      Viability assays with Trypan blue and dual-fluorescent stains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab3' && (
            <div id="tab3" className="tab_content uppertabcontent">
              <div className="row">
                <div className="col-md-6">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                      Suitable for analysis of hepatocytes, stem cells, splenocytes, tumor suspension,
                      and other complex primary cells
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Accurate isolated nuclei counts</p>
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
          <li className="active">Cellometer K2</li>
        </ol>
      </div>
    </div>
  );
};

export default CellCountingCellometerK2;




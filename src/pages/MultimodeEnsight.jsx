import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MultimodeEnsight = () => {
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
          <Link to="/MultimodePlateReader" className="standard-back">
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
            The EnSight® multimode plate reader offers HTS Alpha and Ultra-sensitive Luminescence technologies alongside conventional multimode detection technologies. When equipped with a quad monochromator, the EnSight plate reader can improve performance for absorbance and fluorescence detection.
            </p>
            <Link
              to="#tab2"
              onClick={() => setActiveTab('tab2')}
              className={activeTab === 'tab2' ? 'active tab_btm_margin' : 'tab_btm_margin'}
            >
              Features
            </Link>
          </ul>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>EnSight® Multimode Plate Reader</h1>
              <img
                id="features"
                src="../images/ensight.png"
              ></img>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="row">
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Temperature control to 65°C</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Plate barcode reader</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                    Plate shaking
                    </p>
                  </div>
                </div>
				<div className="clearfix"></div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                    Plate stackers, 20 plates or 50 plates
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                    Robotic Interface for automation solutions
                    </p>
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
            <Link to="/CellAnalysisCellHealthViability">Cell Health & Viability</Link>
          </li>
          <li>
            <Link to="/MultimodePlateReader">Microplate Readers</Link>
          </li>
          <li className="active">EnSight</li>
        </ol>
      </div>
    </div>
  );
};

export default MultimodeEnsight
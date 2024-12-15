import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Victor2DInstrument = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/platform" className="standard-back">
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
            src="../images/clips/cell_analysis_bg.mp4"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            <Link
              onClick={() => setActiveTab('overview')}
              className={activeTab === 'overview' ? 'active' : ''}
            >
              Overview
            </Link>
            
              <p className="tab_btm_margin">
                VICTOR2™D Instrument is the ideal measurement platform for low
                volume laboratories. Easy to use and reliable, Victor2D provides
                start-up screening programs with the right balance of
                cost-effectiveness and control.
              </p>
            
            <Link
              onClick={() => setActiveTab('features')}
              className={activeTab === 'features' ? 'active tab_btm_margin' : 'tab_btm_margin'}
            >
              Features
            </Link>
          </ul>

          {/* Tab 1 Content */}
          {activeTab === 'overview' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>VICTOR2™D Instrument</h1>
              <img
                id="features"
                src="../images/platforms_victor2.png"
                alt="Victor2D Instrument"
              />
            </div>
          )}

          {/* Tab 2 Content */}
          {activeTab === 'features' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Ideal measurement instrument for different size
                        laboratories
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Easy to use and reliable measurement device
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        User friendly and comprehensive workstation software is
                        included
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Right balance of cost-effectiveness and control
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Pre-set protocols for neonatal assays
                      </p>
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
            <Link to="/clinical-diagnostics">Clinical & Diagnostics</Link>
          </li>
          <li>
            <Link to="/clinical-diagnostics-newborn">Newborn Screening</Link>
          </li>
          <li>
            <Link to="/platforms">Platforms</Link>
          </li>
          <li className="active">VICTOR2™D Instrument</li>
        </ol>
      </div>
    </div>
  );
};

export default Victor2DInstrument;

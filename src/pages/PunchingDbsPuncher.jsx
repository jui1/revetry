import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DBSPuncher = () => {
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
          <Link to="/punching" className="standard-back">
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
              DBS Puncher® Instrument is a semi-automatic device for punching
              dried blood spot samples into microtitration plates. The 2-plate
              capacity puncher is an easy-to-use, robust option for lower
              capacity screening.
            </p>
            <Link
              onClick={() => setActiveTab('features')}
              className={activeTab === 'features' ? 'active tab_btm_margin' : 'tab_btm_margin'}
            >
              Features
            </Link>
          </ul>

          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>DBS Puncher® Instrument</h1>
              <img
                id="features"
                src="../images/punching_dbs_puncher.png"
                alt="DBS Puncher"
              />
            </div>
          )}

          {/* Features Tab Content */}
          {activeTab === 'features' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Easy Operation</p>
                      <p>
                        • Semi-automatic functionality.<br />
                        • Handles two microtitration plates.<br />
                        • Ensures precision and efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Durability</p>
                      <p>
                        • Built with robust materials.<br />
                        • Designed for long-term use in labs.<br />
                        • Low maintenance requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">User-Friendly</p>
                      <p>
                        • Simple interface for ease of use.<br />
                        • Suitable for lower capacity screening.<br />
                        • Ergonomic design for lab technicians.
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
            <Link to="/punching">Punching</Link>
          </li>
          <li className="active">DBS Puncher</li>
        </ol>
      </div>
    </div>
  );
};

export default DBSPuncher;

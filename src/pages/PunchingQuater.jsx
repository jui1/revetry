import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DBS_Panthera = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="stretched">
      <div className="clearfix">
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
              Panthera-Puncher™9 Instrument is the next-generation semi-automatic
              dried sample punching device with an automatically adjusting punch
              pattern. Panthera-Puncher instrument allows you to process sample
              materials with optimum efficiency and performance.
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
              <h1>Panthera-Puncher™9 Instrument</h1>
              <img
                id="features"
                src="../images/punching_panthera_puncher.png"
                alt="Panthera Puncher"
              />
            </div>
          )}

          {/* Features Tab Content */}
          {activeTab === 'features' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  {[
                    'Gets your sample material to tell you more',
                    'Comfortable punching',
                    '9 Assays from one blood card',
                    'Flexible, popular design',
                    'Disk sizes to suit your assay',
                    'Easy maintenance',
                    'Punching security through full traceability',
                  ].map((feature, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="applicationswithoutimage2">
                        <p className="applicationsp">{feature}</p>
                      </div>
                    </div>
                  ))}
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
          <li className="active">DBS Panthera</li>
        </ol>
      </div>
    </div>
  );
};

export default DBS_Panthera;

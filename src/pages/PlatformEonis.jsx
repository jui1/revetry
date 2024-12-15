import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EonisSystem = () => {
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
              EONIS™ system - Multiplexing of SMA, SCID, and XLA screening with
              one assay utilizing Real-Time PCR technology, without increasing
              daily hands-on workload and complexity. The design of the EONIS
              assay and system enables automation without compromising the
              sample traceability from punch to result.
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
              <h1>EONIS™ System</h1>
              <img
                id="features"
                src="../images/platforms_eonis.png"
                alt="EONIS System"
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
                      <p className="applicationsp">Simplified and fast workflow</p>
                      <p className="featurespara alileft">
                        • PCR reagents are pre-plated and dried to minimize contamination and
                        remove PCR master-mix preparation step.<br />
                        • DNA is eluted from blood disks without any wash steps.<br />
                        • No need to run calibrators on the plates. Lot-specific calibrators
                        are provided in the QC certificate included in the kit.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Software designed specifically for newborn screening
                      </p>
                      <p className="featurespara alileft">
                        • One software for PCR run management and result analysis.<br />
                        • No manual data handling.<br />
                        • Seamless integration to LIMS.<br />
                        • Quality Control monitoring for tracking of QC levels over time.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Ideal for laboratories of all sizes
                      </p>
                      <p className="featurespara alileft">
                        • No need for a pre-PCR clean room.<br />
                        • Small footprint of instrumentation.
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
          <li className="active">EONIS™ System</li>
        </ol>
      </div>
    </div>
  );
};

export default EonisSystem;

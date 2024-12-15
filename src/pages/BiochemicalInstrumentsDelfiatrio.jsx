import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AutoDELFIA = () => {
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
              DELFIA® (dissociation-enhanced lanthanide fluorescence
              immunoassay) is a time-resolved fluorescence (TRF) intensity
              technology. Assays are designed to detect the presence of a
              compound or biomolecule using lanthanide chelate labeled
              reagents, separating unbound reagent using wash steps. DELFIA
              assays are flexible, compatible with a variety of plate readers,
              and, as this is a wash-based technology, compatible with most
              sample types.
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
              <h1>DELFIA Trio</h1>
              <img
                id="features"
                src="../images/platforms_dlfiatrio.png"
                alt="DELFIA Trio"
              />
            </div>
          )}

          {/* Tab 2 Content */}
          {activeTab === 'features' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  {[
                    'Automatically removes the eluated paper disks from the wells',
                    'Performs all needed wash stages as specified in the assay protocol',
                    'Automatic and precise dispensing of Enhancement solution',
                    'Optimized for use with DELFIA neonatal assays with preinstalled protocols',
                  ].map((feature, index) => (
                    <div key={index} className="col-md-4">
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
            <Link to="/clinical-diagnostics-biochemical-prenatal-testing">
              Biochemical Prenatal Testing
            </Link>
          </li>
          <li>
            <Link to="/platforms">Platforms</Link>
          </li>
          <li className="active">AutoDELFIA® automatic</li>
        </ol>
      </div>
    </div>
  );
};

export default AutoDELFIA;

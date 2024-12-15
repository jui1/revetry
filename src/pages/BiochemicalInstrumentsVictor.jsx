// src/components/BiochemicalInstrumentsVictor.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BiochemicalInstrumentsVictor = () => {
  // State to manage active tab ('overview' or 'capabilities')
  const [activeTab, setActiveTab] = useState('overview');

  // Handler to switch tabs
  const handleTabClick = (e, tab) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveTab(tab);  // Update active tab state
  };

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="/images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/biochemical-prenatal-testing-instruments" className="standard-back">
            <img src="/images/back.png" alt="back" />
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
            src="/images/clips/cell_analysis_bg.webm"
            className="responsive-video"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            {/* Overview Tab */}
            <li>
              <Link
                href="#overview"
                onClick={(e) => handleTabClick(e, 'overview')}
                className={activeTab === 'overview' ? 'active' : ''}
              >
                Overview
              </Link>
            </li>
            {/* Description Paragraph */}
            <p className="tab_btm_margin">
              Ideal measurement platform for low volume clinics or laboratories. Compact, easy to use and reliable, Victor 2D provides start-up screening programs with the right balance of cost-effectiveness and control.
            </p>
            {/* Capabilities Tab */}
            <li>
              <Link
                href="#capabilities"
                onClick={(e) => handleTabClick(e, 'capabilities')}
                className={activeTab === 'capabilities' ? 'active' : ''}
              >
                Capabilities
              </Link>
            </li>
          </ul>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>VICTOR™ 2D Fluorometer</h1>
              <img
                id="features"
                src="/images/platforms_victor2.png"
                alt="Victor 2D Fluorometer"
              />
            </div>
          )}

          {activeTab === 'capabilities' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  {/* Capability 1 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Manual or semi-automated system</p>
                    </div>
                  </div>
                  {/* Capability 2 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Batch loading, 96-well format</p>
                    </div>
                  </div>
                  {/* Capability 3 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Easy to use and reliable measurement device</p>
                    </div>
                  </div>
                  {/* Capability 4 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Time to results 2–4 H</p>
                    </div>
                  </div>
                  {/* Capability 5 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Serum and dried blood spot assays</p>
                    </div>
                  </div>
                  {/* Capability 6 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Easy to use and reliable</p>
                    </div>
                  </div>
                  {/* Capability 7 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Easy to expand the analyte panel</p>
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
            <Link to="/clinical-diagnostics-biochemical-prenatal-testing">Biochemical Prenatal Testing</Link>
          </li>
          <li>
            <Link to="/biochemical-prenatal-testing-instruments">Instruments</Link>
          </li>
          <li className="active">VICTOR™ 2D</li>
        </ol>
      </div>
    </div>
  );
};

export default BiochemicalInstrumentsVictor;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BiochemicalInstrumentsAutodelfia = () => {
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
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            {/* Overview Tab */}
            <li>
              <Link
                href="#tab1"
                onClick={(e) => handleTabClick(e, 'overview')}
                className={activeTab === 'overview' ? 'active' : ''}
              >
                Overview
              </Link>
            </li>
            {/* Description Paragraph */}
            <p className="tab_btm_margin">
              AutoDELFIA® immunoassay system is a fully automatic and easy to use, and it has become the screening
              solution of choice for laboratories around the world and giving reliable, high quality results both
              for aneuploidy and pre-eclampsia risk assessment during pregnancy. The instrument is supported by a
              wide range of prenatal analytes and all kits employ the sensitive and robust DELFIA® chemistry, based
              on time-resolved fluorescence.
            </p>
            {/* Capabilities Tab */}
            <li>
              <Link
                href="#tab2"
                onClick={(e) => handleTabClick(e, 'capabilities')}
                className={activeTab === 'capabilities' ? 'active' : ''}
              >
                Capabilities
              </Link>
            </li>
          </ul>

          {/* Conditionally render tab content based on the activeTab state */}
          {activeTab === 'overview' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>AutoDELFIA® Automatic</h1>
              <img
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="/images/platforms_autodlfia.png"
                alt="AutoDELFIA Automatic"
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
                      <p className="applicationsp">Fully automated</p>
                    </div>
                  </div>
                  {/* Capability 2 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Batch loading</p>
                    </div>
                  </div>
                  {/* Capability 3 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">432 sample tubes, up to 8 different assays per run</p>
                    </div>
                  </div>
                  {/* Capability 4 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Time to results 2-4 h</p>
                    </div>
                  </div>
                  {/* Capability 5 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">User-friendly instrument software</p>
                    </div>
                  </div>
                  {/* Capability 6 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Serum and dried blood spot assays</p>
                    </div>
                  </div>
                  {/* Capability 7 */}
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Supports connectivity with LifeCycle™ and 3rd party software
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
            <Link to="/clinical-diagnostics-biochemical-prenatal-testing">
              Biochemical Prenatal Testing
            </Link>
          </li>
          <li>
            <Link to="/biochemical-prenatal-testing-instruments">Instruments</Link>
          </li>
          <li className="active">AutoDELFIA® automatic</li>
        </ol>

        {/* External JavaScripts */}
        {/* 
          Note: In React, it's recommended to handle scripts differently.
          You might need to use useEffect to initialize plugins or use React-compatible libraries.
          Therefore, it's best to remove or comment out these script tags to prevent conflicts.
        */}
        {/* <script src="../js/jquery.js"></script>
        <script src="../js/functions.js"></script>
        <script src="../js/tab.js"></script>
        <script src="../js/uppertab.js"></script> */}
      </div>
    </div>
  );
};

export default BiochemicalInstrumentsAutodelfia;

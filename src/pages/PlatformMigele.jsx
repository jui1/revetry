import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MigeleInstrument = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Default tab is 'overview'

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
              Migele™ Gel Electrophoresis Unit Instrument is a robust, scalable
              and easy-to-use instrument for detection of crucial life-saving
              disorders. It works with the RESOLVE™ hemoglobin kit to detect
              hemoglobinopathies in newborns and adults, including sickle cell
              disease and other hemoglobin variants and thalassemias.
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
              <h1>Migele™ Gel Electrophoresis Unit Instrument</h1>
              <img
                id="features"
                src="../images/platforms_migele.png"
                alt="Migele Instrument"
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
                      <p className="applicationsp">Results are visual and easily identifiable</p>
                      <p className="featurespara">
                        The IEF technique combined with the specially formulated gels results in
                        excellent separation of differing hemoglobin bands, allowing you to achieve
                        identifiable results.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Time efficient</p>
                      <p className="featurespara">
                        The RESOLVE kit lets you complete the run within 60 to 90 minutes, excluding
                        sample preparation. Multiple electrophoresis units can be run at the same
                        time to produce more results within the same time frame.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Scalable</p>
                      <p className="featurespara">
                        A typical setup includes two to four electrophoresis units on one
                        circulating water bath. Expansion of the system is possible with minimal
                        cost. Units can even be stacked to save space.
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
            <Link to="/ClinicalDiagnostics">Clinical & Diagnostics</Link>
          </li>
          <li>
            <Link to="/clinical-diagnostics-newborn">Newborn Screening</Link>
          </li>
          <li>
            <Link to="/platform">Platforms</Link>
          </li>
          <li className="active">Migele™ Gel Electrophoresis Unit Instrument</li>
        </ol>
      </div>
    </div>
  );
};

export default MigeleInstrument;

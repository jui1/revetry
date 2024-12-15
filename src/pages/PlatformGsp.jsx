import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlatformGSP = () => {
  const [showActiveModal,setShowActiveModal]=useState(true);
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
            <Link onClick={()=>setShowActiveModal(true)} className={showActiveModal&&'active'} >Overview</Link>
            <p className="tab_btm_margin">
              GSP® Instrument for neonatal dried blood spot assays is the system
              of choice for medium to large laboratories. Performing all assay
              stages automatically with superior accuracy and traceability, GSP
              instrument supports our complete range of analytes and employs
              several measurement techniques for screening of core NBS
              disorders. From plate loading to results output, GSP instrument
              offers laboratories outstanding efficiency and confidence
              throughout the screening process.
            </p>
            <Link onClick={()=>setShowActiveModal(false)} className={!showActiveModal?'active tab_btm_margin':'tab_btm_margin'}>
              Features
            </Link>
          </ul>

          {/* Tab 1 Content */}
         {showActiveModal&& <div id="tab1" className="tab_content uppertabcontent">
            <h1>GSP® Instrument</h1>
            <img
              id="features"
              autoPlay=""
              muted=""
              controls=""
              loop=""
              playsInline=""
              src="../images/platforms_gsp.png"
              alt="GSP Instrument"
            />
          </div>}

          {/* Tab 2 Content */}
         {!showActiveModal &&<div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Safe and Convenient</p>
                    <p className="featurespara">
                      GSP Neonatal kits are the industry standard for analytical
                      performance and reliability. Each kit includes reagents,
                      QC material and specific QC certificates.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">Flexible workflow</p>
                    <p className="featurespara">
                      The GSP instrument is optimized for continuous sample
                      loading. The loaded plates are processed automatically or
                      users can prioritize the order in which plates are
                      processed.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="applicationswithoutimage2">
                    <p className="applicationsp">
                      Fully Automated from plate load to results
                    </p>
                    <p className="featurespara">
                      Saving you time and effort while reducing risk of errors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>}
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
            <Link to="/clinical-diagnostics-newborn">
              Newborn Screening
            </Link>
          </li>
          <li>
            <Link to="/platform">Platforms</Link>
          </li>
          <li className="active">GSP® Instrument</li>
        </ol>
      </div>
    </div>
  );
};

export default PlatformGSP;

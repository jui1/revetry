import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlatformQsight = () => {
    const [showOverview,setShowOverview]=useState(true);
  return (
    <div className="stretched">
     

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <a href="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </a>
        </div>

        {/* Back Button */}
        <div id="back">
          <a href="/platforms" className="standard-back">
            <img src="../images/back.png" alt="back" />
          </a>
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
            <Link className={showOverview&&'active'} onClick={()=>setShowOverview(true)}>Overview</Link>
            <p className="tab_btm_margin">
              QSight® MD systems enable expanded high-throughput mass spectrometry screening and, with the QSight® 225 MD UHPLC Screening System, the option for tier 2 testing – using just a single heel-prick dried blood spot (DBS) card. The QSight system delivers a unique combination of self-cleaning MSMS instrumentation that provides exceptional system uptime, a simple setup process, and easy-to-use database software that simplifies review and analysis.
            </p>
            <Link className={!showOverview?'active tab_btm_margin':'tab_btm_margin'} onClick={()=>setShowOverview(false)}>
              Features
            </Link>
            {/* Uncomment this if needed */}
            {/* <br><a className="tab_btm_margin" href="#tab3">Applications</a> */}
          </ul>

          {/* Tab 1 Content */}
         { showOverview&&<div id="tab1" className="tab_content uppertabcontent">
            <h1>QSight® MD Systems</h1>
            <img
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/platforms_qsight.png"
              alt="QSight Systems"
            />
          </div>}

          {/* Tab 2 Content */}
         { !showOverview&&<div id="tab2" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                {[
                  {
                    title: 'Single Source',
                    description: 'With plug and play  ESI probes',
                  },
                  {
                    title: 'StayClean Source',
                    description:
                      'Self-cleaning design delivers sensitivity and exceptional uptime',
                  },
                  {
                    title: 'Mass Filters',
                    description:
                      'High-quality precision rods provide highly stable, precise mass filtering',
                  },
                  {
                    title: 'UniField Detector',
                    description:
                      'Patented technology counts positive and negative ions without high voltage switching',
                  },
                  {
                    title: 'HSID Interface',
                    description:
                      'Provides low background and reliable results day after day, with equal response at any flow rate',
                  },
                  {
                    title: 'Collision Cell',
                    description:
                      'Fast, efficient fragmentation (fast MRMs) shortens cycle time with zero crosstalk',
                  },
                  {
                    title: 'Laminar Flow Ion Guide',
                    description: 'Highly efficient field-free transmission',
                  },
                  {
                    title: 'Modular',
                    description: 'Plug-and-play design for ease of service',
                  },
                ].map((feature, index) => (
                  <div key={index} className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">{feature.title}</p>
                      <p className="featurespara">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>}
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/clinical-diagnostics">Clinical & Diagnostics</a>
          </li>
          <li>
            <a href="/clinical-diagnostics-newborn">Newborn Screening</a>
          </li>
          <li>
            <a href="/platforms">Platforms</a>
          </li>
          <li className="active">QSight® MD systems</li>
        </ol>
      </div>
    </div>
  );
};

export default PlatformQsight;

// Platform.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Note: It's recommended to avoid using jQuery in React. Implement functionalities using React's state and props.

const Platform = () => {


  return (
    <div className="stretched">
      {/* Preloader */}
 

      {/* Wrapper */}
      <div id="" className={`clearfix`}>
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="/images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/clinical-diagnostics-newborn" className="standard-back">
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
            src="/images/clips/clinical_newborn_platforms.webm"
            className="responsive-video"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="row">
              {/* Platform Block 1 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-1 clearfix">
                  <div className="entry-image">
                    <Link to="/platform-qsight">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="QSight"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform Block 2 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-2 clearfix">
                  <div className="entry-image">
                    <Link to="/platform-gsp">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="GSP"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform Block 3 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-3 clearfix">
                  <div className="entry-image">
                    <Link to="/platform-migele">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="Migele"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform Block 4 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-4 clearfix">
                  <div className="entry-image">
                    <Link to="/platform-victor2">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="VICTOR2"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform Block 5 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-5 clearfix">
                  <div className="entry-image">
                    <Link to="/biochemical-instruments-delfiatrio">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="Biochemical Instruments Delfiatrio"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform Block 6 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="platform-6 clearfix">
                  <div className="entry-image">
                    <Link to="/platform-eonis">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="EONIS"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
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
          <li className="active">Analysis and measurement platforms</li>
        </ol>

        {/* Additional Information */}
        <ol className="breadcrumb_right">
          <p>
            Products may not be licensed in accordance with the laws in all countries, such as the United States and Canada. <br />
            Please check with your local representative for availability.
          </p>
        </ol>
      </div>

      {/* External JavaScripts */}
      {/* 
        Note: In React, it's recommended to handle scripts differently.
        You might need to use useEffect to initialize plugins or use React-compatible libraries.
      */}
      {/* <script type="text/javascript" src="/js/jquery.js"></script>
      <script type="text/javascript" src="/js/functions.js"></script>
      <script type="text/javascript" src="/js/plugins.js"></script>
      <script type="text/javascript" src="/js/uppertab.js"></script> */}
    </div>
  );
};

export default Platform;

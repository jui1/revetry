// src/components/ClinicalDiagnosticsBiochemicalPrenatalTesting.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Note: It's recommended to avoid using jQuery in React. Implement functionalities using React's state and props.

const ClinicalDiagnosticsBiochemicalPrenatalTesting = () => {
  // State to manage preloader visibility

  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);



  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="stretched">
      {/* Preloader */}


      {/* Wrapper */}
      <div id="" className={`clearfix `}>
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="/images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/ClinicalDiagnostics" className="standard">
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
            src="/images/clips/08_pre_eclampsia.webm"
            className="responsive-video"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            <div className="row">
              {/* First Block */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="eclampsia-1 clearfix">
                  <div className="entry-image">
                    <Link to="/biochemical-instruments-victor">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="Biochemical Instruments Victor"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second Block */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="eclampsia-2 clearfix">
                  <div className="entry-image">
                    <Link to="/biochemical-instruments-delfia-xpress">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="Biochemical Instruments Delfia Xpress"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Third Block */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="eclampsia-3 clearfix">
                  <div className="entry-image">
                    <Link to="/biochemical-instruments-autodelfia">
                      <img
                        className="image_fade"
                        src="/images/life-science-1.png"
                        alt="Biochemical Instruments AutoDelfia"
                        style={{ opacity: 1 }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Fourth Block with Modal Trigger */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="eclampsia-4 clearfix">
                  <div
                    className="entry-image"
                    style={{ cursor: 'pointer' }}
                    onClick={openModal}
                  >
                    <img
                      className="image_fade"
                      src="/images/life-science-1.png"
                      alt="LifeCycle Risk Calculation Software"
                      style={{ opacity: 1 }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div style={modalStyles.overlay} className="modal">
              <div style={modalStyles.content} className="modal-content">
                <button
                  onClick={closeModal}
                  style={modalStyles.closeButton}
                  aria-label="Close Modal"
                >
                  &times;
                </button>
                <div
                  className="feature-box fbox-center fbox-effect nobottomborder nobottommargin"
                  style={{ padding: '40px' }}
                >
                  <h1>LifeCycle Risk Calculation Software</h1>
                  <p>
                    Tailored Solutions to Support Your Screening Needs LifeCycle 7.0 software is the complete data
                    management solution for prenatal screening laboratories. With a sleek, simple but flexible user
                    interface, performance monitoring dashboard and built on a browser-based platform to allow access
                    from any current web browser. Additionally, it provides high level of configurability and
                    connectivity options for full integration into your laboratory. The whole application is
                    underpinned by the flexible trusted Revvity Risk Calculation Engine that is designed to ensure
                    optimal screening performance for your laboratory.
                  </p>

                  <div id="tab8-1">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          {/* Flexible Screening */}
                          <div className="col-md-4">
                            <div className="nipt_features">
                              <h4 className="soltabsh4">Flexible Screening</h4>
                              <p>• Multiple screening strategies are supported</p>
                              <p>
                                • Software is able to combine demographics and biomarker data to z-score results to produce
                                risk.
                              </p>
                            </div>
                          </div>

                          {/* Tailored to Population */}
                          <div className="col-md-4">
                            <div className="nipt_features">
                              <h4 className="soltabsh4">Tailored to Population</h4>
                              <p>• Optimize risk calculation to your population</p>
                              <p>• Ability to level or change MoM equations</p>
                            </div>
                          </div>

                          {/* Configurable */}
                          <div className="col-md-4">
                            <div className="nipt_features">
                              <h4 className="soltabsh4">Configurable</h4>
                              <p>
                                • Accessible via web browser or over remote connection outside laboratory
                              </p>
                              <p>• High level of configurability and connectivity option</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
          <li className="active">Biochemical Prenatal Testing</li>
        </ol>

        {/* Additional Information */}
        <ol className="breadcrumb_right">
          <p>
            Products may not be licensed in accordance with the laws in all countries, such as the United States and Canada.
            <br /> Please check with your local representative for availability.
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

// Styles for Modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300,
  },
  content: {
    backgroundColor: '#FFF',
    maxWidth: '80%',
    padding: '40px',
    borderRadius: '8px',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1400,
  },
};

export default ClinicalDiagnosticsBiochemicalPrenatalTesting;

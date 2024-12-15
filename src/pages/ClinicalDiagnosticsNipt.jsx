// src/components/ClinicalDiagnosticsNipt.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Optional: You can create a separate CSS file for modal styles or include them in your existing stylesheets.

const ClinicalDiagnosticsNipt = () => {
  // State management for four modals
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  // Functions to open modals
  const openModal1 = () => setIsOpen1(true);
  const openModal2 = () => setIsOpen2(true);
  const openModal3 = () => setIsOpen3(true);
  const openModal4 = () => setIsOpen4(true);

  // Functions to close modals
  const closeModal1 = () => setIsOpen1(false);
  const closeModal2 = () => setIsOpen2(false);
  const closeModal3 = () => setIsOpen3(false);
  const closeModal4 = () => setIsOpen4(false);

  // Close all modals when the "Escape" key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal1();
        closeModal2();
        closeModal3();
        closeModal4();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close the modal if user clicks outside of it
  const handleOutsideClick = (e, closeModal) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

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
          <Link to="/ClinicalDiagnostics" className="standard">
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
            src="../images/clips/09_nipt.webm"
            style={{ width: '100%' }}
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Image Modal 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="nipt-1 clearfix">
                <div className="entry-image">
                  <Link onClick={openModal1}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science 1"
                      style={{ opacity: 1, cursor: 'pointer' }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal 1 */}
            {isOpen1 && (
              <div
                className="modal"
                onClick={(e) => handleOutsideClick(e, closeModal1)}
                style={modalStyles.overlay}
              >
                <div className="modal-content" style={modalStyles.content}>
                  <button onClick={closeModal1} style={modalStyles.closeButton}>
                    ×
                  </button>
                  <div
                    className="feature-box fbox-center fbox-effect nobottomborder nobottommargin"
                    style={{ padding: '40px' }}
                  >
                    <video
                      id="home-video"
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      src="../images/nipt_videos/vanadis-NIPT-system.webm"
                      style={{ width: '100%' }}
                    ></video>
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="nipt-2 clearfix">
                <div className="entry-image">
                  <Link onClick={openModal2}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science 2"
                      style={{ opacity: 1, cursor: 'pointer' }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal 2 */}
            {isOpen2 && (
              <div
                className="modal"
                onClick={(e) => handleOutsideClick(e, closeModal2)}
                style={modalStyles.overlay}
              >
                <div className="modal-content" style={modalStyles.content}>
                  <button onClick={closeModal2} style={modalStyles.closeButton}>
                    ×
                  </button>
                  <div
                    className="feature-box fbox-center fbox-effect nobottomborder nobottommargin"
                    style={{ padding: '40px' }}
                  >
                    <video
                      id="home-video"
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      src="../images/nipt_videos/vanadis-NIPT-system.webm"
                      style={{ width: '100%' }}
                    ></video>
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="nipt-3 clearfix">
                <div className="entry-image">
                  <Link onClick={openModal3}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science 3"
                      style={{ opacity: 1, cursor: 'pointer' }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal 3 */}
            {isOpen3 && (
              <div
                className="modal"
                onClick={(e) => handleOutsideClick(e, closeModal3)}
                style={modalStyles.overlay}
              >
                <div className="modal-content" style={modalStyles.content}>
                  <button onClick={closeModal3} style={modalStyles.closeButton}>
                    ×
                  </button>
                  <div
                    className="feature-box fbox-center fbox-effect nobottomborder nobottommargin"
                    style={{ padding: '40px' }}
                  >
                    <video
                      id="home-video"
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      src="../images/nipt_videos/vanadis-NIPT-system.webm"
                      style={{ width: '100%' }}
                    ></video>
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal 4 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="nipt-4 clearfix">
                <div className="entry-image">
                  <Link onClick={openModal4}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science 4"
                      style={{ opacity: 1, cursor: 'pointer' }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal 4 */}
            {isOpen4 && (
              <div
                className="modal"
                onClick={(e) => handleOutsideClick(e, closeModal4)}
                style={modalStyles.overlay}
              >
                <div className="modal-content" style={modalStyles.content}>
                  <button onClick={closeModal4} style={modalStyles.closeButton}>
                    ×
                  </button>
                  <div
                    className="feature-box fbox-center fbox-effect nobottomborder nobottommargin"
                    style={{ padding: '40px' }}
                  >
                    <h1>LifeCycle risk calculation software</h1>
                    <p>
                      Tailored Solutions to Support Your Screening Needs LifeCycle 7.0 software is the complete data management solution for prenatal screening laboratories. With a sleek, simple but flexible user interface, performance monitoring dashboard and built on a browser-based platform to allow access from any current web browser. Additionally, it provides high level of configurability and connectivity options for full integration into your laboratory. The whole application is underpinned by the flexible trusted Revvity Risk Calculation Engine that is designed to ensure optimal screening performance for your laboratory.
                    </p>

                    <div id="tab8-1">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="nipt_features">
                                <h4 className="soltabsh4">Flexible screening</h4>
                                <p>• Multiple screening strategies are supported</p>
                                <p>• Software is able to combine demographics and biomarker data to z-score results to produce risk.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="nipt_features">
                                <h4 className="soltabsh4">Tailored to population</h4>
                                <p>• Optimize risk calculation to your population</p>
                                <p>• Ability to level or change MoM equations</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="nipt_features">
                                <h4 className="soltabsh4">Configurable</h4>
                                <p>• Accessible via web browser or over remote connection outside laboratory</p>
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
          </div>
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
          <li className="active">Biochemical Prenatal Testing</li>
        </ol>

        {/* Additional Information */}
        <ol className="breadcrumb_right">
          <p>
            Products may not be licensed in accordance with the laws in all countries, such as the United States and Canada.
            <br />
            Please check with your local representative for availability.
          </p>
        </ol>
      </div>
    </div>
  );
};

// Modal styles
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0,1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300,
  },
  content: {
    backgroundColor: '#FFF',
    maxWidth: '80%',
    padding: '40px',
    zIndex: 1200,
    borderRadius: '8px',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '0px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '54px',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1200,
  },
};

export default ClinicalDiagnosticsNipt;

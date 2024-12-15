// src/components/BiochemicalInstrumentsDelfiaXpress.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// If needed for other styles

const BiochemicalPrenatalTestingDelfiaAssays = () => {
  // State to manage active modal (null or modal id)
  const [activeModal, setActiveModal] = useState(null);

  // Handler to open a modal
  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  // Handler to close the modal
  const closeModal = () => {
    setActiveModal(null);
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
          <Link to="/clinical-diagnostics-preeclampsia-testing" className="standard-back">
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
            src="/images/clips/06_DELFIA_assays.webm"
            className="responsive-video"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Links to Open Modals */}
            {[...Array(10)].map((_, index) => (
              <Link
                href={`#myModal-${index + 1}`}
                data-lightbox="inline"
                className={`delfia-${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(index + 1);
                }}
                style={{ cursor: 'pointer' }}
                key={index}
              ></Link>
            ))}

            {/* Modal Components */}
            {activeModal === 1 && (
            <div style={modalStyles.overlay} className="modal1" id="myModal-1">
            <div style={modalStyles.content} className="modal-content">
              <button
                onClick={closeModal}
                style={modalStyles.closeButton}
                aria-label="Close Modal"
              >
                &times;
              </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">PlGF 1-2-3™*</h2>
                    <p>
                      Revvity PlGF kits are for the quantitative determination of placental growth factor in
                      maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Direct “sandwich” technique</li>
                            <li className="list-group-item">
                              • Intended throughout pregnancy prediction of pre-eclampsia and aid in diagnosis and
                              short-term prediction
                            </li>
                            <li className="list-group-item">
                              • Can also be used to improve the performance of Down syndrome screening in the first
                              trimester
                            </li>
                            <li className="list-group-item">
                              • Limit of Detection (LoD) determined as 3.0 pg/mL with 95 % probability
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {/* Repeat similar modal structures for modals 2 to 10 */}
            {activeModal === 2 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-2">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">PAPP-A</h2>
                    <p>
                      Revvity PAPP-A kits are for the quantitative determination of pregnancy associated plasma
                      protein A (PAPP-A) in maternal serum. These assays are based on two monoclonal antibodies
                      directed against two antigenic determinants on the PAPP-A/proMBP complex.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Specific for PAPP-A/proMBP complex</li>
                            <li className="list-group-item">
                              • Analytical sensitivity typically better than 5 mU/L for AutoDELFIA assay
                            </li>
                            <li className="list-group-item">• Extensive measurement range up to 10,000 mU/L</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 3 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-3">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">Free hCGß</h2>
                    <p>
                      Revvity Free hCGß kits are for the quantitative determination of the free beta subunit of
                      human chorionic gonadotrophin (Free hCGß) in maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">
                              • Assay detects only the free ß subunit of hCG
                            </li>
                            <li className="list-group-item">
                              • Analytical sensitivity is typically better than 0.2 ng/mL
                            </li>
                            <li className="list-group-item">• No sample dilution needed</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 4 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-4">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">sFlt-1*</h2>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Direct “sandwich” technique</li>
                            <li className="list-group-item">
                              • Intended for aid in diagnosis of preeclampsia 20 weeks onwards together with PlGF 1-2-3
                            </li>
                            <li className="list-group-item">• Limit of Detection (LoD) determined as 3.8 pg/mL</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 5 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-5">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">PAPP-A/Free hCGß DBS</h2>
                    <p>
                      Revvity PAPP-A/Free hCGß Dual DBS kits are for the simultaneous quantitative determination
                      of human alpha-fetoprotein (hAFP) and the free beta subunit of human chorionic
                      gonadotrophin (Free hCGß) in maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Optimized for dry blood spot (DBS) samples</li>
                            <li className="list-group-item">
                              • High-throughput compatible, resulting in rapid processing of samples
                            </li>
                            <li className="list-group-item">• Excellent precision</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 6 && (
            <div style={modalStyles.overlay} className="modal1" id="myModal-6">
            <div style={modalStyles.content} className="modal-content">
              <button
                onClick={closeModal}
                style={modalStyles.closeButton}
                aria-label="Close Modal"
              >
                &times;
              </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">Alpha-Fetoprotein (AFP)</h2>
                    <p>
                      Revvity Alpha-Fetoprotein kits are for the quantitative determination of AFP in
                      maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Critical in diagnosing neural tube defects</li>
                            <li className="list-group-item">• Analytical sensitivity is typically better than 0.1 ng/mL</li>
                            <li className="list-group-item">• Suitable for serum and plasma samples</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {/* Continue with modals 7 to 10 following the same pattern */}

            {activeModal === 7 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-7">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">Inhibin A</h2>
                    <p>
                      Revvity Inhibin A kits are for the quantitative determination of Inhibin A in maternal
                      serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Used in screening for Down syndrome</li>
                            <li className="list-group-item">• Limit of Detection (LoD) determined as 5.0 pg/mL</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 8 && (
              <div style={modalStyles.overlay} className="modal1" id="myModal-8">
              <div style={modalStyles.content} className="modal-content">
                <button
                  onClick={closeModal}
                  style={modalStyles.closeButton}
                  aria-label="Close Modal"
                >
                  &times;
                </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">Total hCG</h2>
                    <p>
                      Revvity Total hCG kits are for the quantitative determination of the total hCG levels in
                      maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Detects both free hCG and hCG bound to other proteins</li>
                            <li className="list-group-item">• Analytical sensitivity better than 0.3 mIU/mL</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 9 && (
             <div style={modalStyles.overlay} className="modal1" id="myModal-9">
             <div style={modalStyles.content} className="modal-content">
               <button
                 onClick={closeModal}
                 style={modalStyles.closeButton}
                 aria-label="Close Modal"
               >
                 &times;
               </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">Dimeric Inhibin A</h2>
                    <p>
                      Revvity Dimeric Inhibin A kits are for the quantitative determination of dimeric Inhibin A
                      in maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Critical for early detection of preeclampsia</li>
                            <li className="list-group-item">• Analytical sensitivity is typically better than 1.0 pg/mL</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}

            {activeModal === 10 && (
              <div style={modalStyles.overlay} className="modal1" id="myModal-10">
              <div style={modalStyles.content} className="modal-content">
                <button
                  onClick={closeModal}
                  style={modalStyles.closeButton}
                  aria-label="Close Modal"
                >
                  &times;
                </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h2 className="resol-heading">BETA 2 Microglobulin</h2>
                    <p>
                      Revvity BETA 2 Microglobulin kits are for the quantitative determination of BETA 2
                      Microglobulin in maternal serum.
                    </p>

                    <div id="tab1">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item">• Provides critical information for risk assessment</li>
                            <li className="list-group-item">• Limit of Detection (LoD) determined as 2.5 pg/mL</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                   
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
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
    backgroundColor: 'rgba(0, 0, 0, 1)',
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

export default BiochemicalPrenatalTestingDelfiaAssays;

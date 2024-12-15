import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClinicalDiagnosticsPreeclampsiaTesting = () => {
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

        {/* Home Banner Video */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/05_biochemical_prenatal_testing.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* First Block */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical-1 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-prenatal-testing-delfia-assays">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Block */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical-2 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-prenatal-testing-delfia-assays">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical-3 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-prenatal-testing-instruments">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Fourth Block with Modal Trigger */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical-4 clearfix">
                <div style={{cursor:"pointer"}} onClick={openModal} className="entry-image">
                  <button  className="standard">
                    {/* <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div style={modalStyles.overlay} className="modal">
                <div style={modalStyles.content} className="modal-content">
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <button onClick={closeModal} style={modalStyles.closeButton}>
                      &times; {/* Close button */}
                    </button>
                    <h1>Aspirin treatment works, if started early</h1>
                    <p>
                      The ASPRE trial results showed that the rate of developing early onset pre-eclampsia dropped by 82% and preterm pre-eclampsia by 62% among those women who received 150 mg aspirin treatment per night and were at high risk of developing the disease. A secondary analysis proves that if we exclude the patients suffering with known chronic blood pressure, the therapy with aspirin allows to almost eradicate preterm pre-eclampsia for patients that are compliant with the aspirin treatment in 90% of the cases.
                    </p>
                    <img
                      className="image_fade aspirin_img"
                      src="../images/aspirin_treatment_works.png"
                      alt="Image"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/clinical-diagnostics">Clinical & Diagnostics</Link></li>
          <li className="active">Biochemical Prenatal Testing</li>
        </ol>

        {/* Additional Information */}
        <ol className="breadcrumb_right">
          <p>
            Products may not be licensed in accordance with the laws in all countries, such as the United States and Canada. <br />
            Please check with your local representative for availability.
          </p>
        </ol>
      </div>
    </div>
  );
};

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
export default ClinicalDiagnosticsPreeclampsiaTesting;

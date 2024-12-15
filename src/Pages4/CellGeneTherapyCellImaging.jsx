import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTherapyCellImaging = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle modal opening
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to handle modal closing
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity Logo" />
          </Link>
        </div>

        <div id="back">
          <Link to="/CellGeneTheraphyPreclinicalDevelopment" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/04_cell_imaging.webm"
          ></video>
        </div>

        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-imaging-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellImagingOperattaCls">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell Imaging"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-imaging-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellImagingPhenixPlus">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Phenix Plus"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-imaging-3 clearfix">
                <div className="entry-image">
                  <Link to="#" onClick={openModal}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Nexus"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content">
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <video
                      id="home-video"
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      src="../images/clips/cellular_imaging_library.webm"
                    ></video>
                  </div>
                </div>
              </div>
            )}

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-imaging-4 clearfix">
                <div className="entry-image">
                  <Link to="/CellImagingSoftware">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell Imaging Software"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ol className="breadcrumb">
        <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/ResearchAndDevelopment">Research & Development</Link>
                </li>
                <li>
                    <Link to="/ResearchSolution">Research Solution</Link>
                </li>
                <li>
                    <Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link>
                </li>
                <li>
                    <Link to="/CellGeneTheraphyPreclinicalDevelopment">
                        Preclinical Development
                    </Link>
                </li>
                <li>
                    <Link to="/OrganoidsDevelopment">
                        Organoids Development
                    </Link>
                </li>
          <li className="active">Cellular Imaging & Analysis</li>
        </ol>
      </div>
    </div>
  );
};

export default CellGeneTherapyCellImaging
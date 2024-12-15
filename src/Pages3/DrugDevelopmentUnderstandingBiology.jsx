import React, { useState } from "react";
import { Link } from "react-router-dom";
const DrugDevelopmentUnderstandingBiology = () => {
    const [activeModal, setActiveModal] = useState(null);

    const closeModal = () => setActiveModal(null);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("resol-popup")) {
            closeModal();
        }
    };

    return (
        <div className="stretched">


            <div id="" className="clearfix">
                {/* Logo */}
                <div id="logo">
                    <Link to="/" className="standard-logo">
                        <img src="../images/logo-dark.png" alt="revvity" />
                    </Link>
                </div>

                {/* Back Button */}
                <div id="back">
                    <Link to="/DrugDevelopment" className="standard-back">
                        <img src="../images/back-dark.png" alt="back" />
                    </Link>
                </div>

                {/* Video Banner */}
                <div id="home-banner">
                    <video
                        id="home-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="../images/02/03/understanding-biology.webm"
                    ></video>
                </div>
                {/* Content Section */}
                <section id="content">
                    <div className="clearfix">
                        {/* Selection Buttons */}
                        <Link
                            className="selection-1 undbio-1"
                            onClick={() => setActiveModal("modal-1")}
                        ></Link>
                        <Link
                            className="selection-2 undbio-2"
                            onClick={() => setActiveModal("modal-2")}
                        ></Link>
                        <Link
                            className="selection-3 undbio-3"
                            onClick={() => setActiveModal("modal-3")}
                        ></Link>

                        {/* Modals */}
                        {activeModal === "modal-1" && (
                            <div className="resol-popup" id="myModal-1" onClick={handleBackdropClick}>
                                <div className="block divcenter" style={{ backgroundColor: "#FFF", maxWidth: "90%" }}>
                                    <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: "40px" }}>
                                        <h2 className="resol-heading">Interrogate Biology</h2>

                                        <div id="tab1-1">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p >
                                                        Discovering better targets requires a comprehensive understanding of human biology and disease at the molecular level – demonstrated by biological assays.
                                                    </p>
                                                </div>
                                                <div className="col-md-12" >
                                                    <div className="row" >
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Nucleic Acid Purification</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Radiometric Solutions</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Precision Gene Editing and Modulation</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">High-Content Screening</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Commercial Cell Lines</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Cell Counting and Health</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Magnetic Cell Separation</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Antibody-Based Cell Characterization</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Multiplex Immunoassays</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">High-Content Imaging</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">In Vivo Imaging</h4>
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


                        {activeModal === "modal-2" && (
                            <div className="resol-popup" id="myModal-1" onClick={handleBackdropClick}>
                                <div className="block divcenter" style={{ backgroundColor: "#FFF", maxWidth: "90%" }}>
                                    <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: "40px" }}>
                                        <h2 className="resol-heading">Detect and Measure</h2>

                                        <div id="tab1-2">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p >
                                                        Obtaining the most relevant and robust data from cells and model systems necessitates the right combination of assays and instrumentation for the biological question at hand.
                                                    </p>
                                                </div>
                                                <div className="col-md-12" >
                                                    <div className="row" >
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Capillary Electrophoresis for Nucleic Acids and Proteins</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Cell Counting</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Plate Readers</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">High-Content Imaging</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">In Vivo Imaging</h4>
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

                        {activeModal === "modal-3" && (
                            <div className="resol-popup" id="myModal-1" onClick={handleBackdropClick}>
                                <div className="block divcenter" style={{ backgroundColor: "#FFF", maxWidth: "90%" }}>
                                    <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: "40px" }}>
                                        <h2 className="resol-heading">Automate and Analyze</h2>

                                        <div id="tab1-2">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p >
                                                    Obtaining the most relevant and robust data from cells and model systems necessitates the right combination of assays and instrumentation for the biological question at hand.
                                                    </p>
                                                </div>
                                                <div className="col-md-12" >
                                                    <div className="row" >
                                                    <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Liquid Handlers and Noncontact Dispensers</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Robotics for High Throughput</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="undbio_features">
                                                                <h4 className="undbiotabsh4">Informatics</h4>
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
                <ol className="breadcrumb dark_brdcumb">
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
                        <Link to="/DrugDevelopment">Drug Development</Link>
                    </li>
                    <li className="active">Selection & Validation</li>
                </ol>
            </div>
        </div>
    );
};

export default DrugDevelopmentUnderstandingBiology;
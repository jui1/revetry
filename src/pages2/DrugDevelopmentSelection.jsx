import React, { useState } from "react";
import { Link } from "react-router-dom";
const DrugDevelopmentSelection = () => {
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
            src="../images/02/03/selection-validation.webm"
          ></video>
        </div>
        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Selection Buttons */}
            <Link
              className="selection-1"
              onClick={() => setActiveModal("modal-1")}
            ></Link>
            <Link
              className="selection-2"
              onClick={() => setActiveModal("modal-2")}
            ></Link>
            <Link
              className="selection-3"
              onClick={() => setActiveModal("modal-3")}
            ></Link>
            <Link
              className="selection-4"
              onClick={() => setActiveModal("modal-4")}
            ></Link>

            {/* Modals */}
            {activeModal === "modal-1" && (
              <div className="resol-popup" id="myModal-1" onClick={handleBackdropClick}>
                <div className="block divcenter" style={{ backgroundColor: "#FFF", maxWidth: "90%" }}>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: "40px" }}>
                    <h2 className="resol-heading">Taking Aim at Relevant Targets</h2>

                    <div id="tab1-1">
                      <div className="row">
                        <div className="col-md-12">
                          <p >
                            Our imaging and detection technologies enable research scientists to unravel disease pathways and mechanisms of actions from physiologically relevant cells or tissues.
                            Together, they can provide relevant, reliable results, so you can move your discovery campaign forward with confidence.
                          </p>
                        </div>
                        <div className="col-md-12" >
                          <div className="row" >
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Liquid Handlers</h4>
                                <p style={{ textAlign: "left" }}>Automate your science to minimize errors, reduce hands-on time, and increase throughput and reproducibility.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Functional Genomic Screening</h4>
                                <p style={{ textAlign: "left" }}>Enable modulation of thousands of genes in a single experiment to identify genetic pathways, cellular processes, and novel therapeutic targets, and to genetically profile existing or potential therapeutics.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Assays and Readers</h4>
                                <p style={{ textAlign: "left" }}>Efficiently transition from target to hit with our screening reagents supported by multimode microplate readers.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High-Content Screening</h4>
                                <p style={{ textAlign: "left" }}>Optimize target-based and phenotypic profiling of physiologically relevant 2D and 3D cell models with our dedicated reagents, imaging systems, and image- and data-analysis packages.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">In Vivo Preclinical Imaging Solutions</h4>
                                <p style={{ textAlign: "left" }}>Advance your molecular and physiological understanding across a broad range of disease models with our in vivo preclinical imaging solutions.</p>
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
                    <h2 className="resol-heading">Identify Leads with Speed and Confidence</h2>

                    <div id="tab1-2">
                      <div className="row">
                        <div className="col-md-12">
                          <p >
                            Our drug discovery screening solutions can help identify and confirm your drug compounds quickly, so you can advance them to the next stage of the development workflow with confidence.
                          </p>
                        </div>
                        <div className="col-md-12" >
                          <div className="row" >
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Liquid Handlers</h4>
                                <p style={{ textAlign: "left" }}>Automate your science to minimize errors, reduce hands-on time, and increase throughput and reproducibility.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Drug Discovery Reagents</h4>
                                <p style={{ textAlign: "left" }}>Discover our range of immunoassay technologies that enable the selection of optimal immunoassay platforms for your requirements. Choose from traditional wash-based assays to homogenous kits and toolboxes.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Microplate Readers</h4>
                                <p style={{ textAlign: "left" }}>As many of you know, microplate readers are instruments used to detect biological, chemical, biochemical or physical events from samples in a microplate.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High Content Screening Instruments</h4>
                                <p style={{ textAlign: "left" }}>Optimize target-based and phenotypic profiling of physiologically relevant 2D and 3D cell models with our dedicated reagents, imaging systems, and image- and data-analysis packages.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High-throughput Cellular Workflows</h4>
                                <p style={{ textAlign: "left" }}>Revvity's lab automation experts have extensive experience developing integrated workstations automating cell-based assays</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Information</h4>
                                <p style={{ textAlign: "left" }}></p>
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
                    <h2 className="resol-heading">Maximize Selectivity and Potency of Your Compounds</h2>

                    <div id="tab1-2">
                      <div className="row">
                        <div className="col-md-12">
                          <p >
                            During lead optimization, analogs of leads are prepared and synthesized to improve biological properties for clinical development. This improves target selectivity and biological activity and reduces your compound’s potential toxicity.
                          </p>
                        </div>
                        <div className="col-md-12" >
                          <div className="row" >
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Liquid Handlers</h4>
                                <p style={{ textAlign: "left" }}>Automate your science to minimize errors, reduce hands-on time, and increase throughput and reproducibility.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Drug Discovery Reagents</h4>
                                <p style={{ textAlign: "left" }}>Discover our range of immunoassay technologies that enable the selection of optimal immunoassay platforms for your requirements. Choose from traditional wash-based assays to homogenous kits and toolboxes.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Microplate Readers</h4>
                                <p style={{ textAlign: "left" }}>As many of you know, microplate readers are instruments used to detect biological, chemical, biochemical or physical events from samples in a microplate.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High Content Screening Instruments</h4>
                                <p style={{ textAlign: "left" }}>Optimize target-based and phenotypic profiling of physiologically relevant 2D and 3D cell models with our dedicated reagents, imaging systems, and image- and data-analysis packages.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Radiometric Detection</h4>
                                <p style={{ textAlign: "left" }}></p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High-throughput Cellular Workflows</h4>
                                <p style={{ textAlign: "left" }}>Revvity's lab automation experts have extensive experience developing integrated workstations automating cell-based assays</p>
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

            {activeModal === "modal-4" && (
              <div className="resol-popup" id="myModal-1" onClick={handleBackdropClick}>
                <div className="block divcenter" style={{ backgroundColor: "#FFF", maxWidth: "90%" }}>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: "40px" }}>
                    <h2 className="resol-heading">Solutions for Every Step of the Development Process</h2>

                    <div id="tab1-2">
                      <div className="row">
                        <div className="col-md-12">
                          <p >
                          Once a lead compound is selected, you need to perform studies to evaluate its biological effects and gain valuable information on its efficacy, biodistribution, toxicity, and safety.
                          </p>
                        </div>
                        <div className="col-md-12" >
                          <div className="row" >
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Biochemical & Cellular Assays</h4>
                                <p style={{ textAlign: "left" }}></p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Microplate Readers</h4>
                                <p style={{ textAlign: "left" }}>As many of you know, microplate readers are instruments used to detect biological, chemical, biochemical or physical events from samples in a microplate.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">High Content Screening Instruments</h4>
                                <p style={{ textAlign: "left" }}>Optimize target-based and phenotypic profiling of physiologically relevant 2D and 3D cell models with our dedicated reagents, imaging systems, and image- and data-analysis packages.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">Radiometric Detection</h4>
                                <p style={{ textAlign: "left" }}></p>
                              </div>
                            </div>


                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">In Vivo Preclinical Imaging Solutions</h4>
                                <p style={{ textAlign: "left" }}>Advance your molecular and physiological understanding across a broad range of disease models with our in vivo preclinical imaging solutions.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="selection_features">
                                <h4 className="soltabsh4">CMC Testing</h4>
                                <p style={{ textAlign: "left" }}>The Chemistry, manufacturing, and control (CMC) testing of drug substances and drug products play a critical role guaranteeing the quality of the drug product entering clinical trials.</p>
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

export default DrugDevelopmentSelection;
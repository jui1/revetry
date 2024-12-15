import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Note: It's recommended to handle JavaScript plugins differently in React.
// Consider using React-compatible libraries or implementing functionality using React's state and props.

const NewbornScreening = () => {
  // State for Modal 1
  const [isModal1Open, setModal1Open] = useState(false);
  const [tab1,SetTab1]=useState(true);
  // State for Modal 2
  const [isModal2Open, setModal2Open] = useState(false);

  // Functions to open and close Modal 1
  const openModal1 = () => setModal1Open(true);
  const closeModal1 = () => setModal1Open(false);

  // Functions to open and close Modal 2
  const openModal2 = () => setModal2Open(true);
  const closeModal2 = () => setModal2Open(false);

  return (
    <div className="stretched">
      {/* Preloader */}
      

      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/index.html" className="standard-logo">
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
            src="../images/clips/clinical_newborn-screening.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Grid of Images */}
            <div className="row">
              {/* Block 1 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-1 clearfix">
                  <div className="entry-image">
                    <Link to="#" className="disable">
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Life Science 1"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-2 clearfix">
                  <div className="entry-image">
                    <Link to="/clinical-diagnostics-newborn-sample-collection">
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Life Science 2"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-3 clearfix">
                  <div className="entry-image">
                    <Link to="#" className="disable">
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Life Science 3"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block 4 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-4 clearfix">
                  <div className="entry-image">
                    <Link to="/punching">
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Punching"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block 5 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-7 clearfix">
                  <div className="entry-image">
                    <Link to="/platform">
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt="Platforms"
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block 6 - Opens Modal 1 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-6 clearfix">
                  <div className="entry-image" style={{ cursor: 'pointer' }} onClick={openModal1}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Open Modal 1"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 7 - Opens Modal 2 */}
              <div className="col-md-4 col-sm-6 bottommargin">
                <div className="newborn-5 clearfix">
                  <div className="entry-image" style={{ cursor: 'pointer' }} onClick={openModal2}>
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Open Modal 2"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal 1 */}
            {isModal1Open && (
              <div style={modalStyles.overlay} className="modal">
                <div style={modalStyles.content} className="modal-content">
                  <button onClick={closeModal1} style={modalStyles.closeButton}>
                    &times;
                  </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <ul className="tabs">
                      <li>
                        <button className="subtab softwaretabs" onClick={() => SetTab1(true)}>
                          Specimen Gate Software
                        </button>
                      </li>
                      <li>
                        <button className="subtab softwaretabs" onClick={() => SetTab1(false)}>
                          EVOYA
                        </button>
                      </li>
                    </ul>

                    {/* Tab Content */}
                    <div id="tab-content">
                      {/* Tab 1 Content */}
                    { tab1? <div id="tab8-1">
                        <div className="row">
                          <div className="col-md-12">
                            <p>
                              As the global leader in newborn screening, Revvity was well-positioned to develop the world’s
                              first laboratory information management system specifically intended for newborn screening.
                              Specimen Gate® is the result of years of continuous development, and the product is widely
                              used in all parts of the world. Specimen Gate® software modules providing control and monitoring
                              tools for the entire screening process:
                            </p>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              {/* Laboratory Module */}
                              <div className="col-md-4">
                                <div className="newborn_features_software">
                                  <h4 className="soltabsh4">Laboratory®</h4>
                                  <p>
                                    For managing the laboratory processes. Specimen Gate Laboratory Enterprise Edition software
                                    allows two-way communication with Revvity punching devices and instruments, and interfaces to
                                    third-party instruments too. It models the processes involved in punching; allows electronic
                                    gathering of test results from all instruments; flags analytes and disorders based on site-specific
                                    logic; and includes both Quality Control data management as well as Cutoff Analysis tools.
                                  </p>
                                  <div className="alileft">
                                    <h5 className="mt_top_10">• Every case requiring follow up is monitored.</h5>
                                    <h5>• Electronic updating of tasks performed</h5>
                                    <h5>• Reminds of necessary actions</h5>
                                  </div>
                                </div>
                              </div>

                              {/* PatientCare Module */}
                              <div className="col-md-4">
                                <div className="newborn_features_software">
                                  <h4 className="soltabsh4">PatientCare™</h4>
                                  <p>
                                    Specimen Gate® Screening Center™ software focuses on the overall management of newborn screening
                                    programs. It allows smooth handling of patient demographics and patient reports; offers the ability
                                    to enter and track patient and contact information; and supports creating of business rules to govern
                                    the content of patient reports. Ad-hoc querying and statistical information to monitor the performance
                                    of the program is provided.
                                  </p>
                                  <div className="alileft">
                                    <h5 className="mt_top_10">• Easier handling of patient demographics and patient reports</h5>
                                    <h5>• Entry and tracking of patient and contact information</h5>
                                    <h5>• Business rules for patient reports</h5>
                                  </div>
                                </div>
                              </div>

                              {/* Screening Center Module */}
                              <div className="col-md-4">
                                <div className="newborn_features_software">
                                  <h4 className="soltabsh4">Screening Center™</h4>
                                  <p>
                                    For follow up of screen-positive patients and unsatisfactory specimens. Specimen Gate®
                                    PatientCare™ software allows users to define and monitor the processes used to follow up a
                                    positive determination. Cases are created within PatientCare™ software, allowing users to
                                    track the tasks associated with follow up. Users can define procedure templates for each
                                    disorder in the test panel. Each template is made up of individual tasks and includes automatic
                                    follow-up workflow procedures reminding of necessary actions.
                                  </p>
                                  <div className="alileft">
                                    <h5 className="mt_top_10">• Every case requiring follow up is monitored.</h5>
                                    <h5>• Electronic updating of tasks performed</h5>
                                    <h5>• Reminds of necessary actions</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>:<div id="tab8-2">
                        <div className="row">
                          <div className="col-md-12">
                            <p>
                              EVOYA™ is a software platform designed for NBS (Newborn Screening) labs with a focus on managing
                              data securely and streamlining workflows. The platform has the overarching goal of providing
                              functionality that caters to the diverse needs of Newborn Screening Workflows on a global scale.
                              EVOYA is a secure solution, similar to your online banking application.
                            </p>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              {/* Feature 1 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">Cloud-based platform solution</h4>
                                </div>
                              </div>
                              {/* Feature 2 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">One user interface (internal & external)</h4>
                                </div>
                              </div>
                              {/* Feature 3 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">Maintain patient centric approach</h4>
                                </div>
                              </div>
                              {/* Feature 4 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">Standard architecture and deployment</h4>
                                </div>
                              </div>
                              {/* Feature 5 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">Secured Data transfer and laboratory integrations</h4>
                                </div>
                              </div>
                              {/* Feature 6 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">Configuration tools for end users (Demographic-based cutoffs)</h4>
                                </div>
                              </div>
                              {/* Feature 7 */}
                              <div className="col-md-4">
                                <div className="newborn_features">
                                  <h4 className="soltabsh4">CloudOps and Software Services support</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>}

                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modal 2 */}
            {isModal2Open && (
              <div style={modalStyles.overlay} className="modal">
                <div style={modalStyles.content} className="modal-content">
                  <button onClick={closeModal2} style={modalStyles.closeButton}>
                    &times;
                  </button>
                  <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
                    <h1>Earlier detection with complete range of screening solutions for NBS disorders</h1>
                    <p>
                      Early detection is critical to the treatment of many congenital newborn disorders. Revvity’s
                      solutions help you find affected newborns in time and determine the best course of care.
                    </p>

                    <div className="table-responsive">
                      <table className="table table-bordered nobottommargin">
                        <thead>
                          <tr>
                            <th><b>Disorders</b></th>
                            <th><b>Analytes</b></th>
                            <th><b>Instruments</b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Congenital hypothyroidism</td>
                            <td>
                              hTSH <br /> T4
                            </td>
                            <td>✔</td>
                            <td>
                              ✔ <br /> ✔
                            </td>
                            <td>
                              ✔ <br /> ✔
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Congenital adrenal hyperplasia</td>
                            <td>17-OHP</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Cystic fibrosis</td>
                            <td>IRT</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Phenylketonuria</td>
                            <td>Phenylalanine</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Galactosemia</td>
                            <td>
                              GALT <br /> TGAL
                            </td>
                            <td>
                              ✔ <br /> ✔
                            </td>
                            <td>
                              ✔ <br /> ✔
                            </td>
                            <td></td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                          </tr>
                          <tr>
                            <td>G6PD deficiency</td>
                            <td>G6PD</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Biotinidase deficiency</td>
                            <td>Biotinidase</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Duchenne Muscular Dystrophy</td>
                            <td>CK-MM</td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Hemoglobinopathies</td>
                            <td>Hb Variants</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                          </tr>
                          <tr>
                            <td>Metabolic disorders</td>
                            <td>Multiple</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>ADA-SCID</td>
                            <td>Ado, dAdo</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>X-ALD</td>
                            <td>Multiple LPCs</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Lysosomal storage disorders</td>
                            <td>LSDs</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Severe combined immunodeficiency</td>
                            <td>TREC</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Spinal Muscular Atrophy</td>
                            <td>SMA</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>X-linked agammaglobulinemia</td>
                            <td>XLA</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Breadcrumbs */}
            <ol className="breadcrumb">
              <li>
                <Link to="/index.html">Home</Link>
              </li>
              <li>
                <Link to="/portfolio.html">Portfolio</Link>
              </li>
              <li>
                <Link to="/clinical-diagnostics.html">Clinical & Diagnostics</Link>
              </li>
              <li className="active">Newborn Screening</li>
            </ol>

            {/* Additional Information */}
            <ol className="breadcrumb_right">
              <p>
                Products may not be licensed in accordance with the laws in all countries, such as the United States and
                Canada. <br />
                Please check with your local representative for availability.
              </p>
            </ol>
          </div>
        </section>
      </div>

      {/* Modal 2 */}
      {isModal2Open && (
        <div style={modalStyles.overlay} className="modal">
          <div style={modalStyles.content} className="modal-content">
            <button onClick={closeModal2} style={modalStyles.closeButton}>
              &times;
            </button>
            <div className="feature-box fbox-center fbox-effect nobottomborder nobottommargin" style={{ padding: '40px' }}>
              <h1>Earlier detection with complete range of screening solutions for NBS disorders</h1>
              <p>
                Early detection is critical to the treatment of many congenital newborn disorders. Revvity’s solutions help
                you find affected newborns in time and determine the best course of care.
              </p>

              <div className="table-responsive">
                <table className="table table-bordered nobottommargin">
                  <thead>
                    <tr>
                      <th><b>Disorders</b></th>
                      <th><b>Analytes</b></th>
                      <th><b>Instruments</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Congenital hypothyroidism</td>
                      <td>
                        hTSH <br /> T4
                      </td>
                      <td>✔</td>
                      <td>
                        ✔ <br /> ✔
                      </td>
                      <td>
                        ✔ <br /> ✔
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Congenital adrenal hyperplasia</td>
                      <td>17-OHP</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Cystic fibrosis</td>
                      <td>IRT</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Phenylketonuria</td>
                      <td>Phenylalanine</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Galactosemia</td>
                      <td>
                        GALT <br /> TGAL
                      </td>
                      <td>
                        ✔ <br /> ✔
                      </td>
                      <td>
                        ✔ <br /> ✔
                      </td>
                      <td></td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>G6PD deficiency</td>
                      <td>G6PD</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Biotinidase deficiency</td>
                      <td>Biotinidase</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Duchenne Muscular Dystrophy</td>
                      <td>CK-MM</td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Hemoglobinopathies</td>
                      <td>Hb Variants</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                    </tr>
                    <tr>
                      <td>Metabolic disorders</td>
                      <td>Multiple</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ADA-SCID</td>
                      <td>Ado, dAdo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>X-ALD</td>
                      <td>Multiple LPCs</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Lysosomal storage disorders</td>
                      <td>LSDs</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Severe combined immunodeficiency</td>
                      <td>TREC</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Spinal Muscular Atrophy</td>
                      <td>SMA</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>X-linked agammaglobulinemia</td>
                      <td>XLA</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✔</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for Modals
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0,0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300,
  },
  content: {
    backgroundColor: '#FFF',
    maxWidth: '90%',
    padding: '40px',
    borderRadius: '8px',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
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

export default NewbornScreening;

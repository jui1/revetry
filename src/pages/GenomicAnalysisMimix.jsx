import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MimixReferenceStandards = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeSubTab, setActiveSubTab] = useState('tab2-1');

  return (
    <div className="stretched">
      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        <div id="back">
          <Link to="/GenomicAnalysis" className="standard-back">
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
            src="../images/clips/cell_analysis_bg.webm"
          />
        </div>

        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            <li >
              <Link to="#tab1"
               
               className={activeTab === "tab1" ? "active" : ""}
               onClick={() => setActiveTab("tab1")}
              >Overview</Link>
            </li>
            <p className="tab_btm_margin">
              Validate, monitor, and troubleshoot your entire workflows with Revvity’s Mimix™ reference standards. Cell line-derived to maintain genomic complexity, our Mimix reference standards more closely mimic patient samples for greater confidence in results.
            </p>
            <li >
              <Link 
               to="#tab2"
               className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
               onClick={() => setActiveTab("tab2")}
              >Features</Link>
            </li>
            <br />
            <li >
              <Link to="#tab3"
               className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"}
               onClick={() => setActiveTab("tab3")}>Applications</Link>
            </li>
          </ul>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>Mimix™ reference standards</h1>
              <img id="features" src="../images/mimix.png" alt="Mimix Reference Standards" />
            </div>
          )}

          {activeTab === 'tab2' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <ul className="tabs">
                <li onClick={() => setActiveSubTab('tab2-1')}>
                  <Link 
                  className={`subtab ${activeSubTab === "tab2-1" ? "active" : ""}`}
                  to="#tab2-1"
                  onClick={() => handleSubTabClick("tab2-1")}
                  >Cell line-derived</Link>
                </li>

                <li onClick={() => setActiveSubTab('tab2-2')}>
                  <Link 
                  className={`subtab ${activeSubTab === "tab2-2" ? "active" : ""}`}
                  to="#tab2-2"
                  onClick={() => handleSubTabClick("tab2-2")}
                  >Reliable & renewable</Link>
                </li>

                <li onClick={() => setActiveSubTab('tab2-3')}>
                  <Link 
                  className={`subtab ${activeSubTab === "tab2-3" ? "active" : ""}`}
                  to="#tab2-3"
                  onClick={() => handleSubTabClick("tab2-3")}
                  >Product formats</Link>
                </li>

                <li onClick={() => setActiveSubTab('tab2-4')}>
                  <Link 
                  className={`subtab ${activeSubTab === "tab2-4" ? "active" : ""}`}
                  to="#tab2-4"
                  onClick={() => handleSubTabClick("tab2-4")}
                  >Off-the-shelf & custom</Link>
                </li>
              </ul>

              {/* Sub-Tab Content */}
              {activeSubTab === 'tab2-1' && (
                <div id="tab2-1">
                  <div className="row" id="features-mimix">
                    {['cell-1', 'cell-2', 'cell-3'].map((cell, index) => (
                      <div className="col-md-4" key={index}>
                        <div>
                          <video
                            id="features-mimix-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={`../images/mimix-features-${cell}.webm`}
                          />
                          <p className="applicationsmimixvideo">
                            {index === 0
                              ? 'Maintain genomic complexity whilst mimicking patient material, unlike synthetic reference material.'
                              : index === 1
                              ? 'Broad range of allelic frequencies, copy number variants (CNVs), insertions and deletions (INDELs), fusions, and single nucleotide variants (SNVs).'
                              : 'Commutable, providing performance similar to a patient genome sample during sequencing and analysis.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'tab2-2' && (
                <div id="tab2-2">
                  <div className="row" id="features-mimix">
                    <div className="col-md-12">
                      <div className="imagewithoutpadding">
                        <img
                          id="features"
                          src="../images/mimix-features-renewable.png"
                          alt="Renewable Features"
                        />
                      </div>
                    </div>
                    {['Available whenever you need them, unlike patient material which is often of limited quantity.',
                      'Batch-to-batch consistency for reproducibility, unlike FFPE patient material quality which varies throughout the block with genetic profile changes between sections.',
                      'Manufactured to ISO 9001:2015 and ISO 13485:2016.'].map((text, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="applicationswithoutimage">
                          <p>{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'tab2-3' && (
                <div id="tab2-3">
                  <div className="row" id="features-mimix">
                    {['1', '2', '3', '4'].map((num, index) => (
                      <div className="col-md-6" key={index}>
                        <div>
                          <img
                            id="features-mimix-image"
                            src={`../images/mimix-features-${num}.png`}
                            alt={`Feature ${num}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'tab2-4' && (
                <div id="tab2-4">
                  <div className="row" id="features-mimix">
                    {['Online tool to build your custom reference standard in 5 easy steps and get a quote instantly.',
                      'Custom solutions available from our in-house cell line engineering experts.',
                      'Multiple formats and allelic frequencies for end-to-end process control.',
                      'Single plex, multiplex and cancer-specific options.',
                      'Products shipped in as little as 48 hours.',
                      'Choose from a wide range of off-the-shelf products'].map((text, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="applicationswithoutimage">
                          <p className="applicationsp">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tab3' && (
            <div id="tab3" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  {['Liquid biopsy reference standards', 'Pan-cancer reference standards', 'Cancer-specific reference standards', 'NIPT reference standards', 'FFPE reference standards', 'gDNA reference standards'].map((text, index) => (
                    <div className="col-md-2" key={index}>
                      <div className="applicationswithoutimage">
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-md-12">
                    <div className="imagewithoutpadding">
                      <img
                        id="features"
                        src="../images/mimix-applicataions.png"
                        alt="Applications"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/GenomicAnalysis">Genomic Analysis</Link></li>
          <li className="active">Mimix™ reference standards</li>
        </ol>
      </div>

      {/* External JavaScripts can be handled using hooks like useEffect */}
      {/* Add your scripts here if necessary */}
    </div>
  );
};

export default MimixReferenceStandards;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const GenomicAnalysisSampleDisaggregation = () => {
  // Set the default active sub-tab to 'tab2-1'
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeSubTab, setActiveSubTab] = useState('tab2-1');

  // Define inline styles for active tabs and sub-tabs
  const activeTabStyle = {
    borderBottom: '3px solid black', // Orange underline
    color: 'black',
    paddingBottom: '5px',
  };

  const defaultTabStyle = {
    borderBottom: 'none',
    color: '#000',
  };

  return (
    <div className="stretched">
      {/* Logo */}
      <div id="logo">
        <Link to="/" className="standard-logo">
          <img src="../images/logo.png" alt="revvity" />
        </Link>
      </div>

      {/* Back Button */}
      <div id="back">
        <Link to="/GenomicAnalysis" className="standard-back">
          <img src="../images/back.png" alt="Back" />
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
          src="../images/clips/cell_analysis_bg.webm"
        />
      </div>

      {/* Content Section */}
      <section id="content">
        <div className="tab_bg"></div>
        <ul className="tabs uppertab">
          {/* Tab Buttons */}
          <Link
            to="#tab1"
            onClick={() => setActiveTab('tab1')}
            style={activeTab === 'tab1' ? activeTabStyle : defaultTabStyle}
          >
            Overview
          </Link>
          <p className="tab_btm_margin">
            The Bead Ruptor Elite Homogenizer is designed with a unique carriage
            motion coupled with sample specific bead beating material ensure
            that a thorough homogenate is achieved regardless of sample type.
            The intra-tube bead movement reduces swirling and results in the
            higher bead impact forces compared to other bead mills on the market.
            The increased power of the Bead Ruptor Elite Homogenizer decreases
            processing time and reduces sample heating to maximize sample
            preparation efficiency.
          </p>
          <Link
            to="#tab2"
            onClick={() => setActiveTab('tab2')}
            style={activeTab === 'tab2' ? activeTabStyle : defaultTabStyle}
            className="tab_btm_margin"
          >
            Features
          </Link>
          <br />
          <Link
            to="#tab3"
            onClick={() => setActiveTab('tab3')}
            style={activeTab === 'tab3' ? activeTabStyle : defaultTabStyle}
            className="tab_btm_margin"
          >
            Applications
          </Link>
        </ul>

        {/* Tab Content */}
        {activeTab === 'tab1' && (
          <div id="tab1" className="tab_content uppertabcontent">
            <h1>Sample Disaggregation</h1>
            <video
              id="features"
              autoPlay
              muted
              controls
              loop
              playsInline
              src="../images/genomics/01_sample_disaggregation/sample_disaggregation_overview.webm"
            />
          </div>
        )}

        {activeTab === 'tab2' && (
          <div id="tab2" className="tab_content uppertabcontent">
            <ul className="tabs">
              {/* Sub-tab Buttons */}
              <li>
                <Link
                  className="subtab"
                  to="#tab2-1"
                  onClick={() => setActiveSubTab('tab2-1')}
                  style={activeSubTab === 'tab2-1' ? activeTabStyle : defaultTabStyle}
                >
                  Things to be considered
                </Link>
              </li>
              <li>
                <Link
                  className="subtab"
                  to="#tab2-2"
                  onClick={() => setActiveSubTab('tab2-2')}
                  style={activeSubTab === 'tab2-2' ? activeTabStyle : defaultTabStyle}
                >
                  Principle
                </Link>
              </li>
              <li>
                <Link
                  className="subtab"
                  to="#tab2-3"
                  onClick={() => setActiveSubTab('tab2-3')}
                  style={activeSubTab === 'tab2-3' ? activeTabStyle : defaultTabStyle}
                >
                  Dissociation Phases
                </Link>
              </li>
              <li>
                <Link
                  className="subtab"
                  to="#tab2-4"
                  onClick={() => setActiveSubTab('tab2-4')}
                  style={activeSubTab === 'tab2-4' ? activeTabStyle : defaultTabStyle}
                >
                  Dissociation Efficiency
                </Link>
              </li>
              <li>
                <Link
                  className="subtab"
                  to="#tab2-5"
                  onClick={() => setActiveSubTab('tab2-5')}
                  style={activeSubTab === 'tab2-5' ? activeTabStyle : defaultTabStyle}
                >
                  Sample Type
                </Link>
              </li>
            </ul>

            {/* Sub-tab Content */}
            {activeSubTab === 'tab2-1' && (
              <div id="tab2-1">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/01_sample_disaggregation/01_Things_tobe_considered.webm"
                />
              </div>
            )}

            {activeSubTab === 'tab2-2' && (
              <div id="tab2-2">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/01_sample_disaggregation/02_Principle.webm"
                />
              </div>
            )}

            {activeSubTab === 'tab2-3' && (
              <div id="tab2-3">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/01_sample_disaggregation/03_Dissociation_Phases.webm"
                />
              </div>
            )}

            {activeSubTab === 'tab2-4' && (
              <div id="tab2-4">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/01_sample_disaggregation/04_Dissociation_Efficiency.webm"
                />
              </div>
            )}

            {activeSubTab === 'tab2-5' && (
              <div id="tab2-5">
                <video
                  id="features"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  src="../images/genomics/01_sample_disaggregation/05_Sample_Type.webm"
                />
              </div>
            )}
          </div>
        )}

        {activeTab === 'tab3' && (
          <div id="tab3" className="tab_content uppertabcontent">
            <div className="col-md-12">
              <div className="row">
                {[
                  "Increased mRNA yield from skin samples using Omni International Bead Ruptor 24",
                  "Protein Extraction from Hard and Soft Tissue Samples",
                  "Drosophila melanogaster Protein and DNA Extractions",
                  "Genomic DNA Extraction From Plant Tissues",
                  "Detection of Bacterial 16S rDNA Gene from Soil",
                  "Purification of Total RNA from Porcine Skin",
                  "Nucleic Acid Extraction from Mus musculus Tissues",
                  "Homogenization of Bat Tissues and Hair with the Bead Ruptor Elite",
                  "DNA isolation from Plant Tissues",
                  "Budding Yeast Homogenization: Reproducible Protein Extracts with Protein Functioned Retained"
                ].map((app, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">{app}</p>
                    </div>
                  </div>
                ))}
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Breadcrumb */}
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/GenomicAnalysis">Genomic Analysis</Link></li>
        <li className="active">OMNI Technology</li>
      </ol>
    </div>
  );
};

export default GenomicAnalysisSampleDisaggregation;

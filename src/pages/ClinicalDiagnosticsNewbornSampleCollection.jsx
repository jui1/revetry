import React from 'react'
import { Link } from 'react-router-dom';

const ClinicalDiagnosticsNewbornSampleCollection = () => {
    return (
        <div className="stretched">
         
    
          <div id="" className="clearfix">
            <div id="logo">
              <Link to="/" className="standard-logo">
                <img src="../images/logo.png" alt="revvity" />
              </Link>
            </div>
    
            <div id="back">
              <Link to="/clinical-diagnostics-newborn" className="standard-back">
                <img src="../images/back.png" alt="back" />
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
              ></video>
            </div>
    
            <section id="content">
              <div className="tab_bg"></div>
              <ul className="tabs uppertab">
                <Link to="#tab1">Overview</Link>
                <p className="tab_btm_margin">
                  Revvity 226 Sample Collection Device is a dried blood spot
                  collection card comprised of 100% pure cotton linter filter paper
                  validated for even and uniform sample distribution. Revvity can
                  custom-print and manufacture a device format that meets your
                  specialized newborn screening requirements.
                </p>
              </ul>
    
              <div id="tab1" className="tab_content uppertabcontent">
                <h1>Revvity 226 Sample Collection Device</h1>
                <img
                  id="features"
                  src="../images/sample_collection.png"
                  alt="Sample Collection"
                />
              </div>
    
              {/* Uncomment and add functionality for additional tabs if needed */}
              {/* 
              <div id="tab2" className="tab_content uppertabcontent">
                <ul className="tabs">
                  <li><Link className="subtab" href="#tab2-1">Easy Operation</Link></li>
                  <li><Link className="subtab" href="#tab2-2">Sample Preparation</Link></li>
                  <li><Link className="subtab" href="#tab2-3">Image Focus</Link></li>
                  <li><Link className="subtab" href="#tab2-4">Super Fast Scanning</Link></li>
                </ul>
                <div id="tab2-1">
                  <video
                    id="features"
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    src="images/02/02-cell-analysis/features/01-cellometer-auto-T4/01_Easy_Operation.webm"
                  ></video>
                </div>
              </div>
              */}
    
            </section>
    
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
              <li className="active">Sample Collection</li>
            </ol>
          </div>
        </div>
      );
    };

export default ClinicalDiagnosticsNewbornSampleCollection

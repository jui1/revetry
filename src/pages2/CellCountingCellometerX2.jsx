import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CellCountingCellometerX2 = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [subTab, setSubTab] = useState('tab2-1'); // For the subtabs in Features
    const handleSubTabChange = (tab) => {
        setSubTab(tab);
    };

  return (
    <div className="stretched">
      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="Revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/CellCounting" className="standard-back">
            <img src="../images/back.png" alt="Back" />
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
            src="../images/clips/cell_analysis_bg.webm"
          />
        </div>

        {/* Content */}
        <section id="content">
                    <div className="tab_bg"></div>

                    {/* Tabs */}
                    <ul className="tabs uppertab">
                        <Link
                            to="#tab1"
                            className={activeTab === "tab1" ? "active" : ""}
                            onClick={() => setActiveTab("tab1")}
                        >Overview</Link>
                        <p className="tab_btm_margin">
                        Advanced, dual-fluorescence cell counter with built-in assays and cell types for the analysis of hepatocytes, stem cells, splenocytes, tumor suspension, and other complex primary cells. 21 CFR Part 11 module is available.
                        </p>
                        <Link
                            to="#tab2"
                            className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
                            onClick={() => setActiveTab("tab2")}
                        >Features</Link>
                        <br />
                        <Link
                            to="#tab3"
                            className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"}
                            onClick={() => setActiveTab("tab3")}
                        >Applications</Link>
                    </ul>

                    {/* Tab Content */}
                    {activeTab === 'tab1' && (
                        <div id="tab1" className="tab_content uppertabcontent">
                            <h1>Cellometer x2 - Optimized Analysis for Yeast and Other Small Cells</h1>
                            <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/overview/02-cellometer-auto-2000.webm"></video>
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div id="tab2" className="tab_content uppertabcontent">
                            <ul className="tabs">
                                <li>
                                    <Link
                                        className={`subtab ${subTab === "tab2-1" ? "active" : ""}`}
                                        to="#tab2-1"
                                        onClick={() => handleSubTabChange("tab2-1")}
                                    >Touch Screen</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-2" ? "active" : ""}`}
                                    to="#tab2-2"
                                    onClick={() => handleSubTabChange("tab2-2")}
                                >Easy Operation</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >Sample Preparation</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >Super Fast Scanning</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/03-cellometer-x2/Touch_Screen.webm"></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline src="./images/02/02-cell-analysis/features/03-cellometer-x2/Easy_Operation.webm"></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/03-cellometer-x2/Sample_Preparation.webm"></video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/03-cellometer-x2/Super_Fast_Scanning.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Platelets</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Brewing yeast</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Wine yeast</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Other small cells</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
            <Link to="/ResearchAndDevelopment">Research & Development</Link>
          </li>
          <li>
            <Link to="/CellAnalysis">Cell Analysis</Link>
          </li>
          <li>
            <Link to="/CellCounting">Cell Health & Viability</Link>
          </li>
          <li className="active">Cellometer X2</li>
        </ol>
      </div>
    </div>
  );
};

export default CellCountingCellometerX2;

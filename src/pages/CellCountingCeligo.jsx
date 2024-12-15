import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellCountingCeligo = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [subTab, setSubTab] = useState('tab2-1'); // For the subtabs in Features
    const handleSubTabChange = (tab) => {
        setSubTab(tab);
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
                    <Link to="/CellCounting" className="standard-back">
                        <img src="../images/back.png" alt="back" />
                    </Link>
                </div>

                {/* Home Banner Video */}
                <div id="home-banner">
                    <video id="home-video" autoPlay muted loop playsInline src="../images/clips/cell_analysis_bg.webm"></video>
                </div>

                {/* Content Section */}
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
                        A micro-well, plate-based multichannel brightfield and florescent imaging cytometer for 2D and 3D culture using both adherent and suspension cells. 21 CFR Part 11 module is available.
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
                            <h1>Celigo Image Cytometer - Every Cell, Every Well</h1>
                            <img id='features' src="../images/celigo.png" alt="" />
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
                                    >Easy Process</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-2" ? "active" : ""}`}
                                    to="#tab2-2"
                                    onClick={() => handleSubTabChange("tab2-2")}
                                >Every Cell in the well</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >4 Color Acquisition</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >Instrument Speed</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-5" ? "active" : ""}`}
                                    to="#tab2-5"
                                    onClick={() => handleSubTabChange("tab2-5")}
                                >Data Visualization</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-6" ? "active" : ""}`}
                                    to="#tab2-6"
                                    onClick={() => handleSubTabChange("tab2-6")}
                                >Zoom in Data</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-7" ? "active" : ""}`}
                                    to="#tab2-7"
                                    onClick={() => handleSubTabChange("tab2-7")}
                                >Export Data</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-8" ? "active" : ""}`}
                                    to="#tab2-8"
                                    onClick={() => handleSubTabChange("tab2-8")}
                                >Getting Analysis</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-9" ? "active" : ""}`}
                                    to="#tab2-9"
                                    onClick={() => handleSubTabChange("tab2-9")}
                                >Integrated Stacker</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline 
                                src="../images/02/02-cell-analysis/features/04-celigo/01_Easy_Process.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline 
                                src="../images/02/02-cell-analysis/features/04-celigo/02_Every_cell_in_the_well_Scan.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/03_4color_acquisition.webm">
                                </video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/04_Instrument_Speed.webm"></video>
                            )}
                            {subTab === 'tab2-5' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/05_Data_Visualization.webm"></video>
                            )}
                            {subTab === 'tab2-6' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/06_Zoom_in_data.webm"></video>
                            )}
                            {subTab === 'tab2-7' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/07_Export_Data.webm"></video>
                            )}
                            {subTab === 'tab2-8' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/08_Gating_analysis.webm"></video>
                            )}
                            {subTab === 'tab2-9' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/04-celigo/09_Integrated_Stacker.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Apoptosis</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Cell cycle</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Cytotoxicity</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Label-free proliferation</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Migration and invasion assays</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Fluorescent expression and detection</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Phosphorylation and phagocytosis</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Embryoid body</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">3D tumor spheroids</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Organoids</p>
                                        </div>
                                    </div>
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
                    <li><Link to="/CellAnalysis">Cell Analysis</Link></li>
                    <li><Link to="/CellCounting">Cell Health & Viability</Link></li>
                    <li className="active">Celigo Image Cytometer</li>
                </ol>
            </div>
        </div>
  )
}

export default CellCountingCeligo
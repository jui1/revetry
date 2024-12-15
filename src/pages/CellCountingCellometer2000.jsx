import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellCountingCellometer2000 = () => {
    // State to keep track of the active tab
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
                            All-in-one touchscreen, dual-fluorescence cell counter optimized for analysis of primary cells from peripheral blood, cord blood, bone marrow, and other complex samples. Features preconfigured one-touch assays for a variety of samples.
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
                            <h1>Cellometer Auto 2000 - Simple, Automated Cell Counting in Seconds</h1>
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

                                <li><Link
                                    className={`subtab ${subTab === "tab2-5" ? "active" : ""}`}
                                    to="#tab2-5"
                                    onClick={() => handleSubTabChange("tab2-5")}
                                >Green Fluorescent</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/02-cellometer-auto-2000/Touch_Screen.webm"></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/02-cellometer-auto-2000/Easy_Operation.webm"></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/02-cellometer-auto-2000/Sample_Preparation.webm"></video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/02-cellometer-auto-2000/Super_Fast_Scanning.webm"></video>
                            )}
                            {subTab === 'tab2-5' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/02-cellometer-auto-2000/Red_Fluorescent_Red_Fluorescent.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Accurate, consistent, and automated cell counting</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Counting aggregated and irregularly shaped cells</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-6">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Eliminating judgment errors and miscounts</p>
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
                    <li className="active">Cellometer Auto 2000</li>
                </ol>
            </div>
        </div>
    );
};

export default CellCountingCellometer2000;

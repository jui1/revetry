import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellCountingBrightFieldCounting = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [subTab, setSubTab] = useState("tab2-1");


    const handleSubTabChange = (tab) => {
        setSubTab(tab);
    };

    return (
        <div className="clearfix">

            {/* Logo */}
            <div id="logo">
                <Link to="/">
                    <img src="../images/logo.png" alt="Revvity Logo" />
                </Link>
            </div>

            {/* Back Button */}
            <div id="back">
                <Link to="/CellCounting">
                    <img src="../images/back.png" alt="Back" />
                </Link>
            </div>

            {/* Banner Video */}
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

            {/* Main Content Section */}
            <section id="content">
                <div className="tab_bg"></div>

                {/* Upper Tabs */}
                <ul className="tabs uppertab">
                    <Link
                        to="#tab1"
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={() => setActiveTab("tab1")}
                    >
                        Overview
                    </Link>
                    <p className="tab_btm_margin">
                        Our Cellometer® Auto T4 cell counter accurately and easily performs cell count, concentration, and Trypan blue viability measurements on cultured cell lines and purified primary cell samples in less than 30 seconds. This instrument uses brightfield imaging and pattern recognition software to accurately identify and rapidly count individual cells using Trypan blue, including those in clumps and irregularly shaped cells.
                    </p>
                    <Link
                        to="#tab2"
                        className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
                        onClick={() => setActiveTab("tab2")}
                    >
                        Features
                    </Link>
                    <br />
                    <Link
                        to="#tab3"
                        className={activeTab === "tab3" ? "active tab_btm_margin" : "tab_btm_margin"}
                        onClick={() => setActiveTab("tab3")}
                    >
                        Applications
                    </Link>
                </ul>

                {/* Tab Content */}
                {activeTab === "tab1" && (
                    <div id="tab1" className="tab_content uppertabcontent">
                        <h1>Get Faster, More Reliable Data</h1>
                        <video
                            id="features"
                            autoPlay
                            muted
                            controls
                            loop
                            playsInline
                            src="../images/02/02-cell-analysis/overview/01-cellometer-auto-T4.webm"
                        />
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div id="tab2" className="tab_content uppertabcontent">
                        <ul className="tabs">
                            <li>
                                <Link
                                    className={`subtab ${subTab === "tab2-1" ? "active" : ""}`}
                                    to="#tab2-1"
                                    onClick={() => handleSubTabChange("tab2-1")}
                                >
                                    Easy Operation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`subtab ${subTab === "tab2-2" ? "active" : ""}`}
                                    to="#tab2-2"
                                    onClick={() => handleSubTabChange("tab2-2")}
                                >
                                    Sample Preparation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >
                                    Image Focus
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >
                                    Super Fast Scanning
                                </Link>
                            </li>
                        </ul>

                        {/* Sub Tab Content */}
                        {subTab === "tab2-1" && (
                            <div id="tab2-1">
                                <video
                                    id="features"
                                    autoPlay
                                    muted
                                    controls
                                    loop
                                    playsInline
                                    src="../images/02/02-cell-analysis/features/01-cellometer-auto-T4/01_Easy_Operation.webm"
                                />
                            </div>
                        )}

                        {subTab === "tab2-2" && (
                            <div id="tab2-2">
                                <video
                                    id="features"
                                    autoPlay
                                    muted
                                    controls
                                    loop
                                    playsInline
                                    src="../images/02/02-cell-analysis/features/01-cellometer-auto-T4/02_Sample_Preparation.webm"
                                />
                            </div>
                        )}

                        {subTab === "tab2-3" && (
                            <div id="tab2-3">
                                <video
                                    id="features"
                                    autoPlay
                                    muted
                                    controls
                                    loop
                                    playsInline
                                    src="../images/02/02-cell-analysis/features/01-cellometer-auto-T4/03_Image_Focus.webm"
                                />
                            </div>
                        )}

                        {subTab === "tab2-4" && (
                            <div id="tab2-4">
                                <video
                                    id="features"
                                    autoPlay
                                    muted
                                    controls
                                    loop
                                    playsInline
                                    src="../images/02/02-cell-analysis/features/01-cellometer-auto-T4/04_Super_Fast_Scanning.webm"
                                />
                            </div>
                        )}
                    </div>
                )}


                {activeTab === "tab3" && (
                    <div id="tab3" className="tab_content uppertabcontent">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="applicationswithoutimage2">
                                    <p className="applicationsp">Cell concentration</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="applicationswithoutimage2">
                                    <p className="applicationsp">
                                        Viability, size, and morphology
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="applicationswithoutimage2">
                                    <p className="applicationsp">Data from Trypan blue</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="applicationswithoutimage2">
                                    <p className="applicationsp">
                                        Stained cells – even clumpy cells
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="applicationswithoutimage2">
                                    <p className="applicationsp">
                                        IQ/OQ validation and GMP/GLP options with audit trail and
                                        multi-layer access
                                    </p>
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
                <li className="active">Automated Cell Counter</li>
            </ol>
        </div>
    );
};

export default CellCountingBrightFieldCounting;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx = () => {
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
                    <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters" className="standard-back">
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
                        High-throughput cell counter with brightfield and two fluorescent channels. Counts 24 samples with fluorescence in 2.5 minutes or less using a plate-based format. 21 CFR Part 11 module is available.
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
                            <h1>Cellaca MX High-Throughput Cell Counter</h1>
                            <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/overview/05-celleca-MX.webm"></video>
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
                                    >Easy Handling</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-2" ? "active" : ""}`}
                                    to="#tab2-2"
                                    onClick={() => handleSubTabChange("tab2-2")}
                                >Assay</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >Autofocus</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >Modes</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-5" ? "active" : ""}`}
                                    to="#tab2-5"
                                    onClick={() => handleSubTabChange("tab2-5")}
                                >Fast Count</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-6" ? "active" : ""}`}
                                    to="#tab2-6"
                                    onClick={() => handleSubTabChange("tab2-6")}
                                >Results</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline 
                                src="../images/02/02-cell-analysis/features/05-celleca-MX/01_Easy_Handling.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline 
                                src="../images/02/02-cell-analysis/features/05-celleca-MX/02_Assay.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/05-celleca-MX/03_Autofocus.webm">
                                </video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/05-celleca-MX/04_Modes.webm"></video>
                            )}
                            {subTab === 'tab2-5' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/05-celleca-MX/05_Fast_Count.webm"></video>
                            )}
                            {subTab === 'tab2-6' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/02/02-cell-analysis/features/05-celleca-MX/06_Results.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">High-throughput cell counting and viability analysis</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Count up to 24 samples with fluorescence in 3 minutes or less using a plate-based format</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">Low sample volumes</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="applicationswithoutimage2">
                                            <p className="applicationsp">21 CFR Part 11 compliance and automation compatibility access</p>
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
                    <Link to="/ResearchSolution">Research Solution</Link>
                </li>
                <li>
                    <Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link>
                </li>
              <li className="active">Cellaca MX</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx
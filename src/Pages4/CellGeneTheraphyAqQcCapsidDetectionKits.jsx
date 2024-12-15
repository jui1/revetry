import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQcCapsidDetectionKits= () => {
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
                    <Link to="/CellGeneTheraphyAqQc" className="standard-back">
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
                        AlphaLISA technology allows the detection of molecules of interest in a no-wash quantitative assay.
                        </p>
                        <Link
                            to="#tab2"
                            className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
                            onClick={() => setActiveTab("tab2")}
                        >Features</Link>
                        <br />
                    </ul>

                    {/* Tab Content */}
                    {activeTab === 'tab1' && (
                        <div id="tab1" className="tab_content uppertabcontent">
                            <h1>AlphaLISA AAV Capsid Detection Kits</h1>
                            <img id="features" autoPlay muted controls loop playsInline src="../images/alphalisa-sandwich-anti-analyteconjugatedacceptorbead.png"/>
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div id="tab2" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">No-wash steps, no separation steps</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">ELISA alternative technology</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Sensitive detection</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Broad sample compatibility</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Small sample volume</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Results in less than 3 hours </p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Half the time of an ELISA assay</p>
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
                    <li><Link to="/ResearchSolution">Research Solution</Link></li>
                    <li><Link to="/CellGeneTheraphy">Cell & Gene Therapy</Link></li>
                    <li><Link to="/CellGeneTheraphyPreclinicalDevelopment">Preclinical Development</Link></li>
                    <li><Link to="/CellGeneTheraphyAqQc">QA/QC</Link></li>
                    
                    <li className="active">AlphaLISA AAV Capsid Detection Kits</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyAqQcCapsidDetectionKits
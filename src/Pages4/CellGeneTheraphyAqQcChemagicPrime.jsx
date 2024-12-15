import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQcChemagicPrime= () => {
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
                    <Link to="/CellGeneTheraphyAqQcNucleicAcidIsolation" className="standard-back">
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
                        A fully automated research solution for primary sample transfer, DNA and RNA isolation, optional normalization, and PCR setup applications, that offers streamlined, walk-away sample processing.
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
                            <h1>Chemagic Prime Instrument</h1>
                            <img id="features" autoPlay muted controls loop playsInline src="../images/chemagic-prime.png"/>
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
                                    >Automated Barcode Reader</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-2" ? "active" : ""}`}
                                    to="#tab2-2"
                                    onClick={() => handleSubTabChange("tab2-2")}
                                >Primary Sample Handling</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >Walk away Automation</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >Fully Integrated</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-5" ? "active" : ""}`}
                                    to="#tab2-5"
                                    onClick={() => handleSubTabChange("tab2-5")}
                                >Double Sample Set</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-6" ? "active" : ""}`}
                                    to="#tab2-6"
                                    onClick={() => handleSubTabChange("tab2-6")}
                                >Integrated Dispensor</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-7" ? "active" : ""}`}
                                    to="#tab2-7"
                                    onClick={() => handleSubTabChange("tab2-7")}
                                >Eliminate Cross Contamination</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-8" ? "active" : ""}`}
                                    to="#tab2-8"
                                    onClick={() => handleSubTabChange("tab2-8")}
                                >Chemagic Performance</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-9" ? "active" : ""}`}
                                    to="#tab2-9"
                                    onClick={() => handleSubTabChange("tab2-9")}
                                >Output Format</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline
                                    src="../images/chemagic_prime/Automated_Barcode_Reader.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline
                                    src="../images/chemagic_prime/Primary_Sample_Handling.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Walk_away_automation.webm">
                                </video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Fully_Integrated.webm"></video>
                            )}
                            {subTab === 'tab2-5' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Double_Sample_Set.webm"></video>
                            )}
                            {subTab === 'tab2-6' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Integrated_Dispensor.webm"></video>
                            )}
                            {subTab === 'tab2-7' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Eliminate_Cross_Contamination.webm"></video>
                            )}
                            {subTab === 'tab2-8' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/chemagic_performance.webm"></video>
                            )}
                            {subTab === 'tab2-9' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/chemagic_prime/Output_Format.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Genomic DNA and RNA isolation from blood, cells, saliva and tissue for biobanking</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Isolation of viral/bacterial nucleic acids from serum plasma pools</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Processing human body fluids for research applications</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Extraction of high molecular weight DNA for long read sequencing</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Isolation of DNA from various samples for microbiome analysis</p>
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
                    <li><Link to="/CellGeneTheraphyAqQcNucleicAcidIsolation">Nucleic Acid Isolation</Link>
                    </li>
                    <li className="active">Chemagic Prime</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyAqQcChemagicPrime
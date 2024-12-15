import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQcChemagicPrepitoInstrument= () => {
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
                        The chemagic™ Prepito® instrument is an automated system for high-quality DNA/RNA isolation based on proven M-PVA Magnetic Bead Technology.
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
                            <h1>Chemagic™ Prepito® Instrument</h1>
                            <img id="features" autoPlay muted controls loop playsInline src="../images/Chemagic-Prepito-Instrument.png"/>
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div id="tab2" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Up to 12 samples per run</p>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Sample volume capacity up to 1 ml</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Barcode reader for optimal sample management</p>
                                    </div>
                                </div>
                                
                                <div className="clearfix"></div>
                                
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Cost-efficient integrated buffer dispensing and use of standard plastic devices</p>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Touch panel software for ease of use</p>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">USB slot for simple data transfer</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp alileft">Kits available for a large variety of sample materials (e.g., blood, serum and plasma, tissues, etc.)</p>
                                    </div>
                                </div>
                            </div>										
                        </div>
                    </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Isolation of a high yield of pure DNA/RNA </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">NGS</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">MLPA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Genotyping</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Chip-based applications and more</p>
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
                    <li className="active">Chemagic Prepito Instrument</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyAqQcChemagicPrepitoInstrument
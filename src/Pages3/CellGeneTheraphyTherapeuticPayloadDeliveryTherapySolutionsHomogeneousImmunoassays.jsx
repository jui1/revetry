import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays = () => {
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
                    <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions" className="standard-back">
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
                        Designed to facilitate rapid analysis without the need for extensive sample preparation or wash steps, these immunoassays are ideal for high-throughput screening and detailed functional analysis.
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
                            <h1>ALPHA and HTRF Homogeneous Immunoassays</h1>
                            <img id="features" autoPlay muted controls loop playsInline src="../images/dualplex-assays.png"/>
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div id="tab2" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Easy to perform: homogeneous assay with no wash requirement</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">High level of sensitivity, signal stable in time</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Amenable to miniaturization</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Time and labor savings, rapid and accurate results</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Ability to detect and analyze small and large complexes with low to high affinity interactions</p>
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
                                        <p className="applicationsp">A robust method for detecting and quantifying biomarkers, cytokines, and other critical molecules involved in CAR-T cell therapy</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Basic research, target discovery and validation, HTS and primary screening, secondary screening, lead optimization</p>
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
                    <Link to="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions">CAR-T Therapy Solutions</Link>
                </li>
              <li className="active">Homogeneous Immunoassays</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays
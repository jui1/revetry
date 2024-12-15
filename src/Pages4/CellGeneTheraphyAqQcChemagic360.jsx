import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyAqQcChemagic360 = () => {
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
                        The chemagic 360 instrument is based on the well-established magnetic bead based chemagic Technology and the system offers a reliable solution for different sample materials and throughput needs. Configurable with three kinds of chemagic Rod Heads, the system can process sample volumes from 50 µl - 18 ml and the isolated DNA/RNA is suitable for a wide range of downstream applications such as NGS, MPLA, genotypic, and PCR.
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
                            <h1>Chemagic 360 Instrument</h1>
                            <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/nucleic_acid_isolation_overview.webm"></video>
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
                                >Effortless Switch-Over </Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-3" ? "active" : ""}`}
                                    to="#tab2-3"
                                    onClick={() => handleSubTabChange("tab2-3")}
                                >Enabling Unique Samples</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-4" ? "active" : ""}`}
                                    to="#tab2-4"
                                    onClick={() => handleSubTabChange("tab2-4")}
                                >Electric Field</Link></li>

                                <li><Link
                                    className={`subtab ${subTab === "tab2-5" ? "active" : ""}`}
                                    to="#tab2-5"
                                    onClick={() => handleSubTabChange("tab2-5")}
                                >Switchable Electro Magnet</Link></li>
                                <li><Link
                                    className={`subtab ${subTab === "tab2-6" ? "active" : ""}`}
                                    to="#tab2-6"
                                    onClick={() => handleSubTabChange("tab2-6")}
                                >Convenient sample management</Link></li>
                            </ul>

                            {/* Subtab Content */}
                            {subTab === 'tab2-1' && (
                                <video id="features" autoPlay muted controls loop playsInline
                                    src="../images/genomics/02_nucleic_acid_isolation/easy_access.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-2' && (
                                <video id="features" autoPlay muted controls loop playsInline
                                    src="../images/genomics/02_nucleic_acid_isolation/effortless_swithch_over.webm"
                                ></video>
                            )}
                            {subTab === 'tab2-3' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/enaling_unique_samples.webm">
                                </video>
                            )}
                            {subTab === 'tab2-4' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/the_electric_field.webm"></video>
                            )}
                            {subTab === 'tab2-5' && (
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/when_the_instrument_power.webm"></video>
                            )}
                            {subTab === 'tab2-6' && (
                                <video id="features" autoPlay muted controls loop playsInline src="./images/genomics/02_nucleic_acid_isolation/convenient_sample_management.webm"></video>
                            )}
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div id="tab3" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">DNA from Blood: DNA Isolation from Whole Blood Samples for Sequencing, Long-term Storage, HLA Typing, etc.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">Nucleic Acids from Pathogens: from Serum Plasma, or Swabs for Pathogen Testing</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">cfDNA from Plasma: Automated cfDNA Isolation From Plasma for cffDNA or cfDNA analysis</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">miRNA from plasma:for efficient isolation of small RNA for for cancer and metabolic disease research </p>
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
                    <li className="active">Cehemagic 360</li>
                </ol>
            </div>
        </div>
    );
}

export default CellGeneTheraphyAqQcChemagic360
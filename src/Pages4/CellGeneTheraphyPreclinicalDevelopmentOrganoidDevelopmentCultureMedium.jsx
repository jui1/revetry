import React, { useState } from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [activeSubTab, setActiveSubTab] = useState("tab2-1"); // Initialize with the first subtab

    const handleSubTabClick = (subTab) => {
        setActiveSubTab(subTab);
    };

    return (
        <div className="clearfix">
            {/* Logo Section */}
            <div id="logo">
                <Link to="/" className="standard-logo">
                    <img src="../images/logo.png" alt="Revvity" />
                </Link>
            </div>

            {/* Back Button */}
            <div id="back">
                <Link to="/CellGeneTherapyOrganoidDevelopment" className="standard-back">
                    <img src="../images/back.png" alt="Back" />
                </Link>
            </div>

            {/* Video Section */}
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

            {/* Tabs and Content Section */}
            <section id="content">
                <div className="tab_bg"></div>
                <ul className="tabs uppertab">
                    <li>
                        <Link
                            to="#tab1"
                            className={activeTab === "tab1" ? "active" : ""}
                            onClick={() => setActiveTab("tab1")}
                        >
                            Overview
                        </Link>
                        <p className="tab_btm_margin">GrowDex® hydrogels mimic the extracellular matrix and support cell growth and differentiation enabling convenient, reproducible and scalable animal-free culture of 3D spheroids and organoids. Available from Revvity, GrowDex hydrogels are composed of natural nanofibers of cellulose, extracted from wood sourced from sustainable and responsibly managed forests, and are a proven solution for automated cell culture and high-content screening.</p>
                    </li>
                    <li>
                        <Link
                            to="#tab2"
                            className={activeTab === "tab2" ? "active tab_btm_margin" : "tab_btm_margin"}
                            onClick={() => {
                                setActiveTab("tab2");
                                setActiveSubTab("tab2-1"); // Reset subtab to first when switching to tab2
                            }}
                        >
                            Features
                        </Link>
                    </li>
                    <br />
                </ul>

                {/* Tab Content */}
                {activeTab === "tab1" && (
                    <div id="tab1" className="tab_content uppertabcontent">
                        <h1>Xeno-free culture medium</h1>
                        <img
                            id="features"
                            src="../images/culture-medium.png"
                        />
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div id="tab2" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage2">
                                        <p className="applicationsp alileft">Reproducible</p>
                                        <p className="alileft">Manufactured to the highest standards with strict quality control criteria to ensure lot to lot reproducibility</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage2">
                                        <p className="applicationsp alileft">Animal-free</p>
                                        <p className="alileft">No animal biomolecules interfering with readouts</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage2">
                                        <p className="applicationsp alileft">Optimized for imaging</p>
                                        <p className="alileft">Transparent, no auto-fluorescence, and tried and tested on Revvity high-content imaging systems</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage2">
                                        <p className="applicationsp alileft">Convenient</p>
                                        <p className="alileft">Used and stored at room temperature, suitable for liquid handling systems and supplied in prepacked syringes.
                                            <br />Simple protocol – mix GrowDex hydrogels with media and cells</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="applicationswithoutimage2">
                                        <p className="applicationsp alileft">Tunable</p>
                                        <p className="alileft">Optimal gel stiffness is achieved by dilution with cell culture media. Matrix composition can be optimized easily by supplementing cell culture media with specific biomolecules such as growth factors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </section>
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
                <li>
                    <Link to="/CellGeneTheraphyPreclinicalDevelopment">
                        Preclinical Development
                    </Link>
                </li>
                <li>
                    <Link to="/OrganoidsDevelopment">
                        Organoids Development
                    </Link>
                </li>
                <li className="active">Xeno-free culture medium</li>
            </ol>
        </div>
    );
};

export default CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const GenomicAnalysisNucleicAcidIsolation = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeSubTab, setActiveSubTab] = useState('tab2-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleSubTabClick = (subTabId) => {
        setActiveSubTab(subTabId);
    };
    const activeTabStyle = {
        borderBottom: '3px solid black', // Orange underline
        color: 'black',
        paddingBottom: '5px',
      };
    
      const defaultTabStyle = {
        borderBottom: 'none',
        color: '#000',
      };
    return (
        <div id="" className="clearfix">
            <div id="logo">
                <Link to="/" className="standard-logo">
                    <img src="../images/logo.png" alt="revvity" />
                </Link>
            </div>

            <div id="back">
                <Link to="/GenomicAnalysis" className="standard-back">
                    <img src="../images/back.png" alt="back" />
                </Link>
            </div>

            <div id="home-banner">
                <video id="home-video" autoPlay muted loop playsInline src="./images/clips/cell_analysis_bg.webm"></video>
            </div>

            <section id="content">
                <div className="tab_bg"></div>

                {/* Main Tabs */}
                <ul className="tabs uppertab">
                        <Link to="#tab1"  
                        onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}
                        style={activeTab === 'tab1' ? activeTabStyle : defaultTabStyle}>Overview</Link>
                        <p className="tab_btm_margin">The chemagic 360 instrument is based on the well-established magnetic bead based chemagic Technology and the system offers a reliable solution for different sample materials and throughput needs. Configurable with three kinds of chemagic Rod Heads, the system can process sample volumes from 50 µl - 18 ml and the isolated DNA/RNA is suitable for a wide range of downstream applications such as NGS, MPLA, genotypic, and PCR.</p>
                    
                        <Link to="#tab2"  
                        onClick={() => handleTabClick('tab2')} className={activeTab === 'tab_btm_margin tab2' ? 'active' : ''}
                        style={activeTab === 'tab2' ? activeTabStyle : defaultTabStyle}>Features</Link>
                    
                    <br />
                        <Link to="#tab3"  
                        onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3 tab_btm_margin' ? 'active' : ''}
                        style={activeTab === 'tab3' ? activeTabStyle : defaultTabStyle}>Applications</Link>
                    
                </ul>

                {/* Tab Content */}
                {activeTab === 'tab1' && (
                    <div id="tab1" className="tab_content uppertabcontent">
                        <h1>Nucleic Acid Isolation</h1>
                        <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/nucleic_acid_isolation_overview.webm"></video>
                    </div>
                )}

                {activeTab === 'tab2' && (
                    <div id="tab2" className="tab_content uppertabcontent">
                        <ul className="tabs">
                            <li onClick={() => handleSubTabClick('tab2-1')} className={activeSubTab === 'tab2-1' ? 'active' : ''}>
                                <Link to="#tab2-1" className='subtab'
                                style={activeSubTab === 'tab2-1' ? activeTabStyle : defaultTabStyle}
                                >Easy Access</Link>
                            </li>
                            <li onClick={() => handleSubTabClick('tab2-2')} className={activeSubTab === 'tab2-2' ? 'active' : ''}>
                                <Link to="#tab2-2" className='subtab'
                                style={activeSubTab === 'tab2-2' ? activeTabStyle : defaultTabStyle}
                                >Effortless Switch-Over</Link>
                            </li>
                            <li onClick={() => handleSubTabClick('tab2-3')} className={activeSubTab === 'tab2-3' ? 'active' : ''}>
                                <Link to="#tab2-3" className='subtab'
                                style={activeSubTab === 'tab2-3' ? activeTabStyle : defaultTabStyle}
                                >Enabling Unique Samples</Link>
                            </li>
                            <li onClick={() => handleSubTabClick('tab2-4')} className={activeSubTab === 'tab2-4' ? 'active' : ''}>
                                <Link to="#tab2-4" className='subtab'
                                style={activeSubTab === 'tab2-4' ? activeTabStyle : defaultTabStyle}
                                >Electric Field</Link>
                            </li>
                            <li onClick={() => handleSubTabClick('tab2-5')} className={activeSubTab === 'tab2-5' ? 'active' : ''}>
                                <Link to="#tab2-5" className='subtab'
                                style={activeSubTab === 'tab2-5' ? activeTabStyle : defaultTabStyle}
                                >Switchable Electro Magnet</Link>
                            </li>
                            <li onClick={() => handleSubTabClick('tab2-6')} className={activeSubTab === 'tab2-6' ? 'active' : ''}>
                                <Link to="#tab2-6" className='subtab'
                                style={activeSubTab === 'tab2-6' ? activeTabStyle : defaultTabStyle}
                                >Convenient sample management</Link>
                            </li>
                        </ul>

                        {/* Sub Tabs Content */}
                        {activeSubTab === 'tab2-1' && (
                            <div id="tab2-1">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/easy_access.webm"></video>
                            </div>
                        )}
                        {activeSubTab === 'tab2-2' && (
                            <div id="tab2-2">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/effortless_swithch_over.webm"></video>
                            </div>
                        )}
                        {activeSubTab === 'tab2-3' && (
                            <div id="tab2-3">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/enaling_unique_samples.webm"></video>
                            </div>
                        )}
                        {activeSubTab === 'tab2-4' && (
                            <div id="tab2-4">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/the_electric_field.webm"></video>
                            </div>
                        )}
                        {activeSubTab === 'tab2-5' && (
                            <div id="tab2-5">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/when_the_instrument_power.webm"></video>
                            </div>
                        )}
                        {activeSubTab === 'tab2-6' && (
                            <div id="tab2-6">
                                <video id="features" autoPlay muted controls loop playsInline src="../images/genomics/02_nucleic_acid_isolation/convenient_sample_management.webm"></video>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'tab3' && (
                    <div id="tab3" className="tab_content uppertabcontent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="applicationswithoutimage">
                                        <p className="applicationsp">
                                            DNA from Blood: DNA Isolation from Whole Blood Samples for Sequencing, Long-term Storage, HLA Typing, etc.
                                        </p>
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
                                        <p className="applicationsp">miRNA from plasma: for efficient isolation of small RNA for cancer and metabolic disease research</p>
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
                    <Link to="/GenomicAnalysis">Genomic Analysis</Link>
                </li>
                <li className="active">Chemagen Technology</li>
            </ol>
        </div>
    );

}

export default GenomicAnalysisNucleicAcidIsolation
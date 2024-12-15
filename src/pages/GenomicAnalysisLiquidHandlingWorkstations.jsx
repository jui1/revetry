import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const GenomicAnalysisLiquidHandlingWorkstations = () => {
    

    return (
        <div className="stretched">
          
    
          {/* Wrapper */}
          <div id="" className="clearfix">
            {/* Logo */}
            <div id="logo">
              <Link to="/" className="standard-logo">
                <img src="../images/logo.png" alt="Revvity" />
              </Link>
            </div>
    
            {/* Back button */}
            <div id="back">
              <Link to="/GenomicAnalysis" className="standard-back">
                <img src="../images/back.png" alt="Back" />
              </Link>
            </div>
    
            {/* Home Banner with Video */}
            <div id="home-banner">
              <video
                id="home-video"
                autoPlay
                muted
                loop
                playsInline
                src="../images/genomics/02_liquid_handling.webm"
              ></video>
            </div>
    
            {/* Content Section */}
            <section id="content">
              <div className="clearfix">
                {/* Image blocks */}
                {[
                  { to: '/GenomicAnalysisFontus', imgSrc: '../images/life-science-1.png' },
                  { to: '/GenomicAnalysisJanus', imgSrc: '../images/life-science-1.png' },
                  { to: '/GenomicAnalysisSciclone', imgSrc: '../images/life-science-1.png' },
                  { to: '/GenomicAnalysisBioqule', imgSrc: '../images/life-science-1.png' },
                ].map((item, index) => (
                  <div className="col-md-4 col-sm-6 bottommargin" key={index}>
                    <div className={`liquid-handling-${index + 1} clearfix`}>
                      <div className="entry-image">
                        <Link to={item.to}>
                          <img className="image_fade" src={item.imgSrc} alt="Liquid Handling" style={{ opacity: 1 }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
    
            {/* Breadcrumb */}
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
              <li><Link to="/GenomicAnalysis">Genomic Analysis</Link></li>
              <li className="active">Liquid Handling Workstations</li>
            </ol>
          </div>
        </div>
      );
    
}

export default GenomicAnalysisLiquidHandlingWorkstations
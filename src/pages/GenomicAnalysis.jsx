import React from 'react';
import { Link } from 'react-router-dom';
const GenomicAnalysis = () => {


  return (
    <div className="stretched">
      

      <div id="" className="clearfix">
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </Link>
        </div>

        <div id="back">
          <Link to="/ResearchAndDevelopment" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/genomics/01_genomic_analysis.webm"
          />
        </div>

        <section id="content">
          <div className="clearfix">
            {[
              '/GenomicAnalysisSampleDisaggregation',
              '/GenomicAnalysisNucleicAcidIsolation',
              '/MultimodeNivo',
              '/GenomicAnalysisMicrofluidic',
              '/GenomicAnalysisLiquidHandlingWorkstations',
              '/GenomicAnalysisMicrofluidic',
              '/GenomicAnalysisMimix'
            ].map((link, index) => (
              <div key={index} className="col-md-4 col-sm-6 bottommargin">
                <div className={`genomics-${index + 1} clearfix`}>
                  <div className="entry-image">
                    <Link to={link}>
                      <img
                        className="image_fade"
                        src="../images/life-science-1.png"
                        alt={`Genomics ${index + 1}`}
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li className="active">Genomic Analysis</li>
        </ol>
      </div>

    </div>
  );
};

export default GenomicAnalysis;

import React from 'react';
import { Link } from 'react-router-dom';

const CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader = () => {
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

        {/* Back Button */}
        <div id="back">
          <Link to="/CellGeneTheraphyDiscoveryIdentification" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        {/* Home Banner */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/03_multimode_plate_reader.webm"
          />
        </div>

        {/* Content */}
        <section id="content">
          <div className="clearfix">
            {/* Multimode Reader 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="multimode-reader-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyDiscoveryIdentificationMultimodeNivo">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science Image 1"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Multimode Reader 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="multimode-reader-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyDiscoveryIdentificationMultimodeEnsight">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science Image 2"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Multimode Reader 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="multimode-reader-3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphyDiscoverIidentificationMultimodeNexus">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Life Science Image 3"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
        <li><Link to="/ResearchSolution">Research Solution</Link></li>
        <li><Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link></li>
        <li><Link to="/CellGeneTheraphyDiscoveryIdentification">Discovery-Identification to Lead Optimization</Link></li>
        <li className="active">Microplaate Readers</li>
      </ol>
      </div>
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader;
import React from 'react';
import { Link } from 'react-router-dom';
const CellGeneTheraphyDiscoveryIdentificationImaging = () => {
  return (
    <div className="stretched">
      

      {/* Wrapper */}
      <div id="" className="clearfix">
        
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Link */}
        <div id="back">
          <Link to="/CellGeneTheraphyDiscoveryIdentification" className="standard-back">
            <img src="../images/back.png" alt="back" />
          </Link>
        </div>

        {/* Banner Video */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/discovery-identification-imaging.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            
            {/* Sample Preparation Solution 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_1 clearfix">
                <div className="entry-image">
                  <Link to="/CellCounting">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sample Preparation Solution 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_2 clearfix">
                <div className="entry-image">
                  <Link to="/CellImaging">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sample Preparation Solution 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="sample_preparation_solution_3 clearfix">
                <div className="entry-image">
                  <Link to="/Invivo">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Breadcrumbs */}
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio.html">Portfolio</Link></li>
          <li><Link to="/ResearchAndDevelopment">Research & Development</Link></li>
          <li><Link to="/ResearchSolution">Research Solution</Link></li>
          <li><Link to="/ellGeneTheraphy">Cell & Gene Theraphy</Link></li>
          <li><Link to="/CellGeneTheraphyDiscoveryIdentification">Discovery-Identification to Lead Optimization</Link></li>
          <li className="active">Cell Imaging</li>
        </ol>
      </div>

      {/* External JavaScripts */}
      <script type="text/javascript" src="../js/jquery.js"></script>
      <script type="text/javascript" src="../js/functions.js"></script>
      <script type="text/javascript" src="../js/plugins.js"></script>
      <script type="text/javascript" src="../js/uppertab.js"></script>
    </div>
  );
};

export default CellGeneTheraphyDiscoveryIdentificationImaging;
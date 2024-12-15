import React from 'react';
import { Link } from 'react-router-dom';
function CellGeneTheraphyDiscoveryIdentification() {
  const discoveryLinks = [
    { href: '/CellGeneTheraphySamplePreparationSolution', alt: 'Image' },
    { href: '/CellGeneTheraphyNsgLibraryPrepartion', alt: 'Image' },
    { href: '/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule', alt: 'Image' },
    { href: '/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationMimixPanel', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationCellLineEngineering', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationImaging', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationDualplexAssays', alt: 'Image' },
    { href: '/CellGeneTheraphyDiscoveryIdentificationGeneEditing', alt: 'Image' },
  ];

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

        {/* Back Button */}
        <div id="back">
          <Link to="/CellGeneTheraphy" className="standard-back">
            <img src="../images/back.png" alt="back" />
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
            src="../images/02/03/02-Discovery-Identification.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {discoveryLinks.map((link, index) => (
              <div key={index} className="col-md-4 col-sm-6 bottommargin">
                <div className={`discovery_identicication_${index + 1} clearfix`}>
                  <div className="entry-image">
                    <Link to={link.href}>
                      <img className="image_fade" src="../images/life-science-1.png" alt={link.alt} style={{ opacity: 1 }} />
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
          <li><Link to="/ResearchSolution">Research Solution</Link></li>
          <li><Link to="/CellGeneTheraphy">Cell & Gene Theraphy</Link></li>
          <li className="active">Discovery-Identification to Lead Optimization</li>
        </ol>
      </div>
    </div>
  );
}

export default CellGeneTheraphyDiscoveryIdentification;

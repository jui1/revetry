import React from "react";
import { Link } from "react-router-dom";

const CellGeneTheraphyNsgLibraryPrepartion = () => {
  const contentData = [
    {
      id: 1,
      link: "/CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation",
      image: "../images/life-science-1.png",
      alt: "Genomics 1",
    },
    {
      id: 2,
      link: "/CellGeneTheraphyNsgLibraryPrepartionNucleicAcidIsolation",
      image: "../images/life-science-1.png",
      alt: "Genomics 2",
    },
    {
      id: 3,
      link: "/MultimodeNivo",
      image: "../images/life-science-1.png",
      alt: "Genomics 3",
    },
    {
      id: 4,
      link: "/CellGeneTheraphyNsgLibraryPrepartionMicrofluidic",
      image: "../images/life-science-1.png",
      alt: "Genomics 4",
    },
    {
      id: 5,
      link: "/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations",
      image: "../images/life-science-1.png",
      alt: "Genomics 5",
    },
    {
      id: 6,
      link: "/CellGeneTheraphyNsgLibraryPrepartionMicrofluidic",
      image: "../images/life-science-1.png",
      alt: "Genomics 6",
    },
  ];

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
            src="../images/genomics/01_genomic_analysis.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {contentData.map((item) => (
              <div className="col-md-4 col-sm-6 bottommargin" key={item.id}>
                <div className={`genomics-${item.id} clearfix`}>
                  <div className="entry-image">
                    <Link to={item.link}>
                      <img
                        className="image_fade"
                        src={item.image}
                        alt={item.alt}
                        style={{ opacity: 1 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <Link to="/research-and-development">Research & Development</Link>
          </li>
          <li>
            <Link to="/research-solution">Research Solution</Link>
          </li>
          <li>
            <Link to="/cell-gene-theraphy">Cell & Gene Therapy</Link>
          </li>
          <li>
            <Link to="/cell-gene-therapy-discovery-identification">
              Discovery-Identification to Lead Optimization
            </Link>
          </li>
          <li className="active">NSG Library Preparation</li>
        </ol>
      </div>

      {/* External JavaScript */}
      <script src="../js/jquery.js"></script>
      <script src="../js/functions.js"></script>
      <script src="../js/tab.js"></script>
      <script src="../js/uppertab.js"></script>
    </div>
  );
};

export default CellGeneTheraphyNsgLibraryPrepartion;

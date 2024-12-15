import React from 'react';
import { Link } from 'react-router-dom';

const Organoids = () => {
  return (
    <div className="stretched">
      <div id="" className="clearfix">
        {/* Logo Section */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo-dark.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/ResearchSolution" className="standard-back">
            <img src="../images/back-dark.png" alt="back" />
          </Link>
        </div>

        {/* Banner Section */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/07-biology.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Organoids Cards */}
            {[
              { id: 1, link: "CellCountingCellecaMx", img: "../images/life-science-1.png" },
              { id: 2, link: "GenomicAnalysisJanus", img: "../images/life-science-1.png" },
              { id: 3, link: "CellCountingCeligo", img: "../images/life-science-1.png" },
              { id: 4, link: "CellImagingPhenixPlus", img: "../images/life-science-1.png" },
              { id: 5, link: "MultimodeNexus", img: "../images/life-science-1.png" },
              { id: 6, link: "MultimodeNivo", img: "../images/life-science-1.png" },
            ].map(({ id, link, img }) => (
              <div key={id} className="col-md-4 col-sm-6 bottommargin">
                <div className={`organoids-${id} clearfix`}>
                  <div className="entry-image">
                    <Link to={`/${link}`}>
                      <img className="image_fade" src={img} alt={`Organoid ${id}`} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breadcrumb Section */}
        <ol className="breadcrumb dark_brdcumb">
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
          <li className="active">3D Organoids</li>
        </ol>
      </div>
    </div>
  );
};

export default Organoids;

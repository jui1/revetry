import React from 'react';
import { Link } from 'react-router-dom';

const DrugDevelopment = () => {
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
            src="../images/02/03/02-3-4-Drug Discovery.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Drug Development Cards */}
            {[
              { id: 1, link: "DrugDevelopmentSelection", img: "../images/life-science-1.png" },
              { id: 2, link: "drug-development-understanding-biology", img: "../images/life-science-1.png" },
            ].map(({ id, link, img }) => (
              <div key={id} className="col-md-4 col-sm-6 bottommargin">
                <div className={`drudev-${id} clearfix`}>
                  <div className="entry-image">
                    <Link to={`/${link}`}>
                      <img className="image_fade" src={img} alt={`Drug Development ${id}`} />
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
            <Link to="/Researchsolution">Research Solution</Link>
          </li>
          <li className="active">Drug Development</li>
        </ol>
      </div>
    </div>
  );
};

export default DrugDevelopment;

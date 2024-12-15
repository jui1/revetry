import React from 'react';
import { Link } from 'react-router-dom';
const ResearchSolution = () => {
  return (
    <div className="stretched">
      

      {/* Wrapper */}
      <div id="" className="clearfix">
        {/* Logo */}
        <div id="logo">
          <Link to="/" className="standard-logo">
            <img src="../images/logo-dark.png" alt="revvity" />
          </Link>
        </div>

        {/* Back Button */}
        <div id="back">
          <Link to="/ResearchAndDevelopment" className="standard-back">
            <img src="../images/back-dark.png" alt="back" />
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
            src="../images/02/03/02-3-research-solutions.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Card 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="ipost-1 clearfix">
                <div className="entry-image">
                  <Link to="/Organoids">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Organoids"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="ipost-2 clearfix">
                <div className="entry-image">
                  <Link to="/DrugDevelopment">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Drug Development"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="ipost-3 clearfix">
                <div className="entry-image">
                  <Link to="/CellGeneTheraphy">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Cell & Gene Therapy"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Uncomment if needed for additional cards */}
            {/* <div className="col-md-4 col-sm-6 bottommargin"> */}
            {/*   <div className="ipost-4 clearfix"> */}
            {/*     <div className="entry-image"> */}
            {/*       <Link to="disease-research.html"><img className="image_fade" src="images/life-science-1.png" alt="Disease Research" style={{ opacity: 1 }} /></Link> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
          </div>
        </section>

        {/* Breadcrumb */}
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
          <li className="active">Research Solution</li>
        </ol>
      </div>
    </div>
  );
};

export default ResearchSolution;

import React from 'react';
import { Link } from 'react-router-dom';
const CellCounting = () => {
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
          <Link to="/CellAnalysisCellHealthViability" className="standard-back">
            <img src="../images/back.png" alt="Back" />
          </Link>
        </div>

        {/* Banner with Video */}
        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/02_Cell_health.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Cell Counting Items */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-1 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingBrightFieldCounting">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-2 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCellometer2000">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-3 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCellometerX2">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-4 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCellecaMx">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-5 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCeligo">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-6 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCellecaPlx">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="cell-counting-7 clearfix">
                <div className="entry-image">
                  <Link to="/CellCountingCellometerK2">
                    <img className="image_fade" src="../images/life-science-1.png" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
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
            <Link to="/ResearchAndDevelopment">Research & Development</Link>
          </li>
          <li>
            <Link to="/CellAnalysis">Cell Analysis</Link>
          </li>
          <li>
            <Link to="/CellAnalysisCellHealthViability">Cell Health & Viability</Link>
          </li>
          <li className="active">Cell Counting</li>
        </ol>
      </div>
    </div>
  );
};

export default CellCounting;

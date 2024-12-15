import React from 'react'
import { Link } from 'react-router-dom'


const ClinicalDiagnostics = () => {
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
          <Link to="/portfolio" className="standard">
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
            src="../images/clips/clinical_diagnostics.webm"
          ></video>
        </div>

        {/* Content Section */}
        <section id="content">
          <div className="clearfix">
            {/* Portfolio Item 1 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="diagnostics-1 clearfix">
                <div className="entry-image">
                  <Link to="/clinical-diagnostics-biochemical-prenatal-testing">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Clinical Diagnostics Biochemical Prenatal Testing"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="diagnostics-2 clearfix">
                <div className="entry-image">
                  <Link to="/clinical-diagnostics-newborn">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Clinical Diagnostics Newborn"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="diagnostics-3 clearfix">
                <div className="entry-image">
                  <Link to="/clinical-diagnostics-preeclampsia-testing">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Clinical Diagnostics Preeclampsia Testing"
                      style={{ opacity: 1 }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="diagnostics-4 clearfix">
                <div className="entry-image">
                  <Link to="/clinical-diagnostics-nipt">
                    <img
                      className="image_fade"
                      src="../images/life-science-1.png"
                      alt="Clinical Diagnostics NIPT"
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
          <li className="active">Clinical & Diagnostics</li>
        </ol>

        {/* Breadcrumb Right */}
        <ol className="breadcrumb_right">
          <p>
            Products may not be licensed in accordance with the laws in all countries, such as the United States and Canada.
            <br />
            Please check with your local representative for availability.
          </p>
        </ol>
      </div>
    </div>
  )
}

export default ClinicalDiagnostics
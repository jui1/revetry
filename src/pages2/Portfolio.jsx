import React from 'react'
import { Link } from 'react-router-dom'
const Portfolio = () => {
    return (
        <div className="stretched">

            {/* Wrapper */}
            <div id="" className="clearfix">
                {/* Logo */}
                <div id="logo">
                    <Link to="/" className="standard-logo">
                        <img src="images/logo.png" alt="Revvity" />
                    </Link>
                </div>

                {/* Back Button */}
                <div id="back">
                    <Link to="/" className="standard-back">
                        <img src="images/back.png" alt="Back" />
                    </Link>
                </div>

                {/* Home Banner with Video */}
                <div id="home-banner">
                    <video autoPlay muted loop style={{ width: "100%" }}>
                        <source src="/images/01-Portfolio.webm" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content Section */}
                <section id="content">
                    <div className="clearfix">
                        {/* Portfolio Item 1 */}
                        <div className="col-md-4 col-sm-6 bottommargin">
                            <div className="portfolio-1 clearfix">
                                <div className="entry-image">
                                    <Link to="/ResearchAndDevelopment">
                                        <img
                                            className="image_fade"
                                            src="images/life-science-1.png"
                                            alt="Portfolio 1"
                                            style={{ opacity: 1 }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="col-md-4 col-sm-6 bottommargin">
                            <div className="portfolio-2 clearfix">
                                <div className="entry-image">
                                    <Link to="/ClinicalDiagnostics">
                                        <img
                                            className="image_fade"
                                            src="images/life-science-1.png"
                                            alt="Portfolio 2"
                                            style={{ opacity: 1 }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {



  return (
    <div className="stretched">
      
      <div id="home-banner">
        <video autoPlay muted loop style={{ width: "100%" }}>
          <source src="/images/home_bg.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section id="content-index">
        <div>
          <div className="container clearfix">
            <div className="row">
              <div className="heading-block left nomargin">
                <Link to="/portfolio" className="retina-logo" data-dark-logo="images/logo-dark.png">
                  <img src="images/logo.png" alt="Revvity" />
                </Link>
                <h1>Impossible is Inspiration</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;

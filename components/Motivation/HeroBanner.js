import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <div className="motivation-banner-area">
        <div className="container">
          <ul className="social-links">
            <li>
              <a href="#" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Pjostest
              </a>
            </li>
          </ul>

          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="motivation-banner-content">
                <span className="sub-title">I am John Doe</span>
                <h1 className="jost-font">
                  Opportunities Don't Happen, You Create Them
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse.
                </p>
                <Link href="/authentication">
                  <a className="default-btn">
                    <i className="flaticon-user"></i>Get My Free Book<span></span>
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="col-lg-5 col-md-12">
              <div className="motivation-banner-image">
                <img
                  src="/images/motivation/motivation-man.png"
                  alt="business"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="motivation-shape-1">
          <img
            src="/images/motivation/motivation-shape-1.png"
            alt="image"
          />
        </div>
        <div className="motivation-shape-2">
          <img
            src="/images/motivation/motivation-shape-2.png"
            alt="image"
          />
        </div>
        <div className="motivation-shape-3">
          <img
            src="/images/motivation/motivation-shape-3.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

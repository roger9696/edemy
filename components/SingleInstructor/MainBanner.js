import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="instructor-banner-area">
        <div className="container-fluid maxWidth-1920">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="instructor-banner-content">
                <h1 className="el-messiri-font">
                  Learn, Grow, Accomplish your goals
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse.
                </p>
                <div className="banner-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      <i className="flaticon-user"></i>Get Started Now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="instructor-banner-image">
                <img src="/images/instructor-home/banner/main.png" alt="image" />

                <div className="banner-dot-shape">
                  <img
                    src="/images/instructor-home/banner/dot-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="instructor-banner-large-shape">
          <img src="/images/instructor-home/banner/large-shape.png" alt="image" />
        </div>
        <div className="instructor-banner-shape-1">
          <img src="/images/instructor-home/banner/shape1.png" alt="image" />
        </div>
        <div className="instructor-banner-shape-2">
          <img src="/images/instructor-home/banner/shape2.png" alt="image" />
        </div>
        <div className="instructor-banner-shape-3">
          <img src="/images/instructor-home/banner/shape3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

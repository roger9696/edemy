import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="online-art-banner-area">
        <div className="container-fluid maxWidth-1920">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="online-art-banner-image">
                <img src="/images/online-art/banner/main1.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="online-art-banner-content">
                <h1>Express your thoughts by Drawing and Coloring</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse.
                </p>

                <div className="banner-btn">
                  <Link href="/courses-1">
                    <a className="default-btn">
                      <i className="flaticon-user"></i>Find Courses<span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="online-art-banner-wrap-image">
                <img src="/images/online-art/banner/main2.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="online-art-shape-1">
          <img src="/images/online-art/banner/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

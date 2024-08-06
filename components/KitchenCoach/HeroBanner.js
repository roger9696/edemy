import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <div className="kitchen-coach-banner-area">
        <div className="container-fluid maxWidth-1920">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="kitchen-coach-banner-image">
                <img
                  src="/images/kitchen-home/banner-young-woman.jpg"
                  alt="business"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="kitchen-coach-banner-content">
                <h1 className="font-weight-black">
                  Cooking is Really a Demonstration of Adoration
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse.
                </p>
                <Link href="/authentication">
                  <a className="default-btn">
                    <i className="flaticon-user"></i>Join For Free<span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="kitchen-coach-large-shape">
          <img src="/images/kitchen-home/kitchen-large-shape.png" alt="image" />
        </div>

        <div className="kitchen-shape-1">
          <img src="/images/kitchen-home/kitchen-shape-1.png" alt="image" />
        </div>
        <div className="kitchen-shape-2">
          <img src="/images/kitchen-home/kitchen-shape-2.png" alt="image" />
        </div>
        <div className="kitchen-shape-3">
          <img src="/images/kitchen-home/kitchen-shape-3.png" alt="image" />
        </div>
        <div className="kitchen-shape-4">
          <img src="/images/kitchen-home/kitchen-shape-4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

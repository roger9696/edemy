import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="ptb-100 bg-fef8ef position-relative z-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/images/online-photography/about-me.png"
                alt="About me"
              />
            </div>

            <div className="col-lg-6">
              <div className="about-content op-about-me-content">
                <span className="sub-title">about me</span>
                <h2>
                  Master the Art of Photography with Personalized Guidance
                </h2>
                <p>
                  Finding your own space and utilize better learning options can
                  result in faster than the traditional ways. Enjoy the beauty
                  of eLearning!
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="op-funfacts-box">
                      <h3>1926</h3>
                      <p>Finished Sessions</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="op-funfacts-box">
                      <h3>3279</h3>
                      <p>Enrolled Learners</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="op-funfacts-box">
                      <h3>100 %</h3>
                      <p>Satisfaction Rate</p>
                    </div>
                  </div>
                </div>

                <p>
                  <strong>
                    Elevate your photography game with expert coaching. The Art
                    of Online Photography: From Pixels to Perfection. Bringing
                    life to pixels
                  </strong>
                </p>

                <Link href="/about-1">
                  <a className="default-btn">
                    <i className="flaticon-user"></i>More About Me<span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/online-photography/shape2.png"
          alt="shape2"
          className="op-shape2 d-none d-xl-block"
        />
        <img
          src="/images/online-photography/shape3.png"
          alt="shape3"
          className="op-shape3 d-none d-xxl-block"
        />
      </div>
    </>
  );
};

export default AboutMe;

import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="about-me-area pb-100">
        <div className="container">
          <div className="about-me-inner">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-me-image">
                  <img
                    src="/images/business-coach/business-coach2.jpg"
                    alt="business"
                  />
                </div>
              </div>
              
              <div className="col-lg-7 col-md-12">
                <div className="about-me-content">
                  <span className="sub-title">ABOUT ME</span>

                  <h2 className="inter-font">
                    Keep you accountable for your goals as a business and as a
                    leader within your organization
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className="quote">
                    “I wake up every morning and think to myself, ‘how far can I
                    push this company in the next 24 hours.’”
                  </div>

                  <Link href="/authentication">
                    <a className="default-btn">
                      <i className="flaticon-user"></i>Join For Free<span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

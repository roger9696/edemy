import React from "react";
import Link from "next/link";

const DigitalFitnessCoaching = () => {
  return (
    <>
      <div className="online-platform-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="online-platform-image">
                <img src="/images/gym/gym-people.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="online-platform-content">
                <span className="sub-title">
                  Start Your Online Fitness Coaching Presence!
                </span>
                <h2>DIGITAL FITNESS COACHING BUSINESS!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#">
                  <a className="default-btn">
                    <i className="flaticon-user"></i>Get Started Free<span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape23">
          <img src="/images/gym/shape1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default DigitalFitnessCoaching;

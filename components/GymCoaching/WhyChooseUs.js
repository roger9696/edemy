import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container-fluid maxWidth-1920">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image">
                <img src="/images/gym/why-choose-us.png" alt="image" />
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <span className="sub-title">WHY CHOOSE US</span>
                <h2>BUILD GYM SKILLS WITH EXPERTS ANY TIME, ANYWHERE</h2>

                <p>
                  We understand better that online-based learning can make a
                  significant change to reach students from all over the world!
                  Giving options to learn better always can offer the best
                  outcomes!
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-experience"></i> Skilled Trainers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-time-left"></i> Afordable Courses
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tutorials"></i> Efficient &
                      Flexible
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-self-growth"></i> Lifetime Accesss
                    </span>
                  </li>
                </ul>

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
    </>
  );
};

export default WhyChooseUs;

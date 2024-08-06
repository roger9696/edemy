import React from "react";
import Link from "next/link";

const CoachingTypes = () => {
  return (
    <>
      <div className="coaching-types-area pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-coaching-types-box">
                <img
                  src="/images/business-coach/business-coach6.jpg"
                  alt="image"
                />
                <h3 className="inter-font">One-On-One Coaching</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, unt in culpa
                  qui officia deserunt mollit anim id est laborum. But I must
                  explain to you how all this mistaken idea of denouncing
                  pleasure and praising.
                </p>
                <Link href="/about-1">
                  <a className="link-btn">
                    Discover More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-coaching-types-box">
                <img
                  src="/images/business-coach/business-coach7.jpg"
                  alt="image"
                />
                <h3 className="inter-font">Monthly Group Coacing</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, unt in culpa
                  qui officia deserunt mollit anim id est laborum. But I must
                  explain to you how all this mistaken idea of denouncing
                  pleasure and praising.
                </p>
                <Link href="/about-1">
                  <a className="link-btn">
                    Discover More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-coaching-types-box">
                <img
                  src="/images/business-coach/business-coach8.jpg"
                  alt="image"
                />
                <h3 className="inter-font">Diy Online Learning</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, unt in culpa
                  qui officia deserunt mollit anim id est laborum. But I must
                  explain to you how all this mistaken idea of denouncing
                  pleasure and praising.
                </p>
                <Link href="/about-1">
                  <a className="link-btn">
                    Discover More
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

export default CoachingTypes;

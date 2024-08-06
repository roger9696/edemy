import React from "react";
import Link from "next/link";

const HappinessIsCookingTogether = () => {
  return (
    <>
      <div className="happiness-cooking-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="happiness-cooking-image">
                <img
                  src="/images/kitchen-home/happiness-cooking.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="happiness-cooking-content">
                <span className="sub-title">Happiness is cooking together</span>
                <h2 className="font-weight-black">
                  The speed at which I can plan nourishment amid a business
                  break is amazing..!!
                </h2>
                <p>
                  With The Open University you can study whenever and wherever
                  you choose. We have students over 128 countries, and a global
                  reputation as a pioneer in the field flexible learning. Our
                  flexible teaching also means if you travel often need to
                  relocate you can continue to study wherever you go.
                </p>
                <div className="cooking-btn">
                  <Link href="/courses-1">
                    <a className="default-btn">
                      <i className="flaticon-user"></i>View All Courses
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kitchen-shape-5">
          <img src="/images/kitchen-home/kitchen-shape-4.png" alt="image" />
        </div>
        <div className="kitchen-shape-6">
          <img src="/images/kitchen-home/kitchen-shape-2.png" alt="image" />
        </div>
        <div className="kitchen-shape-7">
          <img src="/images/kitchen-home/kitchen-shape-5.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default HappinessIsCookingTogether;

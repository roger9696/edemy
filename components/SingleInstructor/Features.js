import React from "react";

const Features = () => {
  return (
    <>
      <div className="instructor-features-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="instructor-features-card">
                <div className="content">
                  <div className="image-icon">
                    <img
                      src="/images/instructor-home/features/img1.svg"
                      alt="image"
                    />
                  </div>
                  <h3 className="el-messiri-font">
                    Learn the Latest Top Skills
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="instructor-features-card">
                <div className="content">
                  <div className="image-icon">
                    <img
                      src="/images/instructor-home/features/img2.svg"
                      alt="image"
                    />
                  </div>
                  <h3 className="el-messiri-font">Learn in Your Own Pace</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="instructor-features-card">
                <div className="content">
                  <div className="image-icon">
                    <img
                      src="/images/instructor-home/features/img3.svg"
                      alt="image"
                    />
                  </div>
                  <h3 className="el-messiri-font">
                    Learn From Industry Experts
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

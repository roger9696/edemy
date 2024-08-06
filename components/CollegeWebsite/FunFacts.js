import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-area position-relative bg-f5f7fa">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="cw-funfacts single-funfacts-item">
                <h3>10594</h3>
                <p>College students</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="cw-funfacts single-funfacts-item">
                <h3>95 %</h3>
                <p>Student progress</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="cw-funfacts single-funfacts-item">
                <h3>99 %</h3>
                <p>Achievement rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="cw-funfacts single-funfacts-item">
                <h3>712</h3>
                <p>Passionate staff</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/college-website/shape3.png"
          alt="shape3"
          className="cw-shape3"
        />
        <img
          src="/images/college-website/shape4.png"
          alt="shape3"
          className="cw-shape4"
        />
      </div>
    </>
  );
};

export default FunFacts;

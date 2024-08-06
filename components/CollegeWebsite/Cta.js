import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="cw-cta-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 p-0">
              <div className="cw-cta-content">
                <div className="cw-cta-box">
                  <h3 className="playfair-display-font">
                    Start your future at our college
                  </h3>

                  <p>
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Vestibulum ac diam sit amet quam vehicula elementum
                    sed sit amet dui.
                  </p>

                  <Link href="/apply-now">
                    <a className="default-btn cw-btn">
                      Apply Now <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 p-0">
              <div className="cw-cta-img">
                <img src="/images/college-website/cta.jpg" alt="cta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;

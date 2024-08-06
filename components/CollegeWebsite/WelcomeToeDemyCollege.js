import React from "react";
import Link from "next/link";

const WelcomeToeDemyCollege = () => {
  return (
    <>
      <div className="cw-welcome-area ptb-100 overflow-hidden">
        <div className="container-fluid pe-0">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <div className="cw-welcome-img">
                <img src="/images/college-website/welcome.png" alt="welcome" />
              </div>
            </div>

            <div className="col-lg-12 col-xl-6">
              <div className="cw-welcome">
                <div className="cw-welcome-content">
                  <h3 className="playfair-display-font">
                    Welcome to eDemy college
                  </h3>
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Nulla quis lorem ut libero malesuada
                    feugiat.{" "}
                  </p>
                </div>

                <div className="cw-mission-visio">
                  <h3 className="playfair-display-font">Mission and vision</h3>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Curabitur non nulla sit amet nisl tempus convallis
                    quis ac lectus. Donec sollicitudin molestie malesuada. Sed
                    porttitor lectus nibh. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                    sit amet ligula.
                  </p>
                </div>

                <div className="cw-imperial-values">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="cw-imperial-values-content">
                        <h3 className="playfair-display-font">
                          Our imperial values
                        </h3>
                        <p>
                          Donec sollicitudin molestie malesuada. Sed porttitor
                          lectus nibh. Vestibulum ante ipsum primis in faucibus
                          orci luctus et ultrices posuere cubilia Curae; Donec
                          velit neque, auctor sit amet aliquam vel, ullamcorper
                          sit amet ligula.
                        </p>
                        <Link href="/about-1">
                          <a className="default-btn cw-btn">
                            Learn More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                      <img
                        src="/images/college-website/welcome2.jpg"
                        alt="welcome2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="cw-shape2"
          src="/images/college-website/shape2.png"
          alt="shape2"
        />
      </div>
    </>
  );
};

export default WelcomeToeDemyCollege;

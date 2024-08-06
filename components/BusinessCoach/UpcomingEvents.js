import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
  return (
    <>
      <div className="events-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="coaching-events-content">
                <span className="sub-title">COACHING PROGRAM</span>
                <h2 className="inter-font">My Upcoming Events</h2>
                <div className="single-coaching-events-box">
                  <span className="location">
                    <i className="bx bx-map"></i> New York
                  </span>
                  <h3 className="inter-font">
                    <Link href="#">
                      <a>Fundamentals of Self Leadership</a>
                    </Link>
                  </h3>
                  <Link href="/authentication">
                    <a className="default-btn">
                      <i className="flaticon-user"></i> Buy Ticket<span></span>
                    </a>
                  </Link>
                  <div className="date">
                    <div className="div">
                      18
                      <span>March</span>
                    </div>
                  </div>
                </div>

                <div className="single-coaching-events-box">
                  <span className="location">
                    <i className="bx bx-map"></i> Washington DC
                  </span>
                  <h3 className="inter-font">
                    <Link href="#">
                      <a>Network of Professional</a>
                    </Link>
                  </h3>
                  <Link href="/authentication">
                    <a className="default-btn">
                      <i className="flaticon-user"></i> Buy Ticket<span></span>
                    </a>
                  </Link>
                  <div className="date">
                    <div className="div">
                      25
                      <span>April</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="coaching-events-image">
                <img
                  src="/images/business-coach/business-coach9.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="c-shape5">
          <img src="/images/business-coach/c-shape5.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

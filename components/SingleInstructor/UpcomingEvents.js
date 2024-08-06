import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
  return (
    <>
      <div className="instructor-events-area ptb-100">
        <div className="container">
          <div className="section-title instructor-title-color">
            <span className="sub-title">UPCOMING EVENTS</span>
            <h2 className="el-messiri-font">Check Out Our Latest Events</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="instructor-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/instructor-home/events/events1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">Art</a>
                  </Link>
                  <h3 className="el-messiri-font">
                    <Link href="/single-events">
                      <a>The Plaza Art Fair</a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> New York, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="instructor-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/instructor-home/events/events2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">Design</a>
                  </Link>
                  <h3 className="el-messiri-font">
                    <Link href="/single-events">
                      <a>Park Forest Fine Art Fair</a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> New York, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="instructor-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/instructor-home/events/events3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">Digital</a>
                  </Link>
                  <h3 className="el-messiri-font">
                    <Link href="/single-events">
                      <a>Port Clinton Art Festival</a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> New York, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="instructor-events-info">
                <p>
                  Get into details now?​{" "}
                  <Link href="/events">
                    <a>View all events</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

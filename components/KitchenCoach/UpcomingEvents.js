import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
  return (
    <>
      <div className="kitchen-events-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Upcoming Events</span>
            <h2 className="font-weight-black">Check Out Our Latest Events</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-kitchen-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/kitchen-home/events-1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">
                      Coocking
                    </a>
                  </Link>
                  <h3 className="font-weight-black">
                    <Link href="/single-events">
                      <a>NYC Wine & Food Festival</a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> Vancover, Canada
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-kitchen-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/kitchen-home/events-2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">
                      Coocking
                    </a>
                  </Link>
                  <h3 className="font-weight-black">
                    <Link href="/single-events">
                      <a>
                        Epcot International Food & Wine
                      </a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> Vancover, Canada
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-kitchen-events-box">
                <div className="events-image">
                  <Link href="/single-events">
                    <a className="d-block">
                      <img
                        src="/images/kitchen-home/events-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="events-content">
                  <Link href="/single-events">
                    <a className="category">
                      Coocking
                    </a>
                  </Link>
                  <h3 className="font-weight-black">
                    <Link href="/single-events">
                      <a>New Orleans Wine & Food</a>
                    </Link>
                  </h3>
                  <ul className="events-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                    <li>
                      <i className="bx bx-map"></i> Vancover, Canada
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="kitchen-events-info">
                <p>
                  Get into details now?​{" "}
                  <Link href="/events"><a>View all events</a></Link>
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

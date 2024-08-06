import React from "react";
import Link from "next/link";

const DownloadTheKitchenBook = () => {
  return (
    <>
      <div className="kitchen-book-area ptb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="kitchen-book-image">
                <img src="/images/kitchen-home/book.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="kitchen-book-content">
                <span className="sub-title">Download Kitchen Book</span>
                <h2 className="font-weight-black">
                  Passion for cooking can turn a profession any time
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="book-btn">
                  <Link href="#">
                    <a className="default-btn">
                      <i className="flaticon-user"></i>Download Book
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadTheKitchenBook;

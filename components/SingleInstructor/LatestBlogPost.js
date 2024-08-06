import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="oa-blog-area instructor-blog pt-100">
        <div className="container">
          <div className="section-title instructor-title-color">
            <span className="sub-title">OUR BLOG</span>
            <h2 className="el-messiri-font">Latest Articles from eDemy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="oa-blog-card">
                <div className="blog-image">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/instructor-home/blog/blog1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      <a href="#">Artist</a>
                    </li>
                    <li>April 30, 2023</li>
                  </ul>
                  <h3 className="el-messiri-font">
                    <Link href="/single-blog-1">
                      <a>Vibrant Abstract Painting</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-1">
                    <a>
                      <img src="/images/online-art/arrow.svg" alt="icon" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="oa-blog-card">
                <div className="blog-image">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/instructor-home/blog/blog2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      <a href="#">Artist</a>
                    </li>
                    <li>April 30, 2023</li>
                  </ul>
                  <h3 className="el-messiri-font">
                    <Link href="/single-blog-1">
                      <a>Helping Artists Launch Web</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-1">
                    <a>
                      <img src="/images/online-art/arrow.svg" alt="icon" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="oa-blog-card">
                <div className="blog-image">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/instructor-home/blog/blog2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      <a href="#">Artist</a>
                    </li>
                    <li>April 30, 2023</li>
                  </ul>
                  <h3 className="el-messiri-font">
                    <Link href="/single-blog-1">
                      <a>Socially Engaged Art</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-1">
                    <a>
                      <img src="/images/online-art/arrow.svg" alt="icon" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="instructor-blog-wave-shape">
          <img
            src="/images/instructor-home/blog/wave-shape.png"
            alt="image"
            className="w-100"
          />
        </div>
        <div className="instructor-blog-shape">
          <img src="/images/instructor-home/blog/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;

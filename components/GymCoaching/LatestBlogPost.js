import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="blog-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">News and Blogs</span>
            <h2>CHECK OUT LATEST BLOG</h2>
            <p>
              We always give extra care to our student's skills improvements and
              feel excited to share our latest research and learnings!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/single-blog-1">
                    <a className="d-block">
                      <img src="/images/gym/blog-img1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <a href="#" className="category">
                    Education
                  </a>
                  <h3>
                    <Link href="/single-blog-1">
                      <a>7 EMERGENCY HACKS TO STAY HEALTHY WINTER</a>
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src="/images/user/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="blog-post-list">
                <div className="row">
                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="single-blog-post-item">
                      <div className="post-image">
                        <Link href="/single-blog-1">
                          <a className="d-block">
                            <img src="/images/gym/blog-img2.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                      <div className="post-content">
                        <h3>
                          <Link href="/single-blog-1">
                            <a>SAY BUH-BYE TO HOLIDAY STRESS WITH THIS GYM</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="single-blog-post-item">
                      <div className="post-image">
                        <Link href="/single-blog-1">
                          <a className="d-block">
                            <img src="/images/gym/blog-img3.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="post-content">
                        <h3>
                          <Link href="/single-blog-1">
                            <a>10 BEST GIFT IDEAS WHEN YOU’RE IN A PINCH</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="blog-post-info">
                <p>
                  Get into details now?​{" "}
                  <Link href="/blog-2">
                    <a>View all posts</a>
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

export default LatestBlogPost;

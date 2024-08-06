import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2 className="playfair-display-font">Check out our latest blog</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="cw-blog-card">
                <div className="img">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/college-website/blog-img1.jpg"
                        alt="blog"
                      />
                    </a>
                  </Link>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="cw-author d-flex align-items-center">
                    <img src="/images/user/user1.jpg" alt="user" />
                    <h4 className="playfair-display-font">
                      <a href="#">Jesus Gilbert</a>
                    </h4>
                  </div>

                  <div className="cw-date">
                    <i className="bx bx-calendar"></i> September 28, 2022
                  </div>
                </div>

                <h3 className="playfair-display-font">
                  <Link href="/single-blog-1">
                    <a>We feel very happy studying in eDemy college</a>
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="cw-blog-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="cw-author d-flex align-items-center">
                    <img src="/images/user/user2.jpg" alt="user" />
                    <h4 className="playfair-display-font">
                      <a href="#">Hazel Weaver</a>
                    </h4>
                  </div>

                  <div className="cw-date">
                    <i className="bx bx-calendar"></i> September 27, 2022
                  </div>
                </div>

                <h3 className="playfair-display-font">
                  <Link href="/single-blog-1">
                    <a>
                      Rules for good results of students from eDemy college
                    </a>
                  </Link>
                </h3>

                <div className="img mb-0 mt-4">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/college-website/blog-img2.jpg"
                        alt="blog"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="cw-blog-card">
                <div className="img">
                  <Link href="/single-blog-1">
                    <a>
                      <img
                        src="/images/college-website/blog-img3.jpg"
                        alt="blog"
                      />
                    </a>
                  </Link>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="cw-author d-flex align-items-center">
                    <img src="/images/user/user3.jpg" alt="user" />
                    <h4 className="playfair-display-font">
                      <a href="#">Lore Alvarado</a>
                    </h4>
                  </div>

                  <div className="cw-date">
                    <i className="bx bx-calendar"></i> September 26, 2022
                  </div>
                </div>

                <h3 className="playfair-display-font">
                  <Link href="/single-blog-1">
                    <a>eDemy college admission trends 2021-2022 were many</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;

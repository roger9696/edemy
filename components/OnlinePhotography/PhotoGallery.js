import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PhotoGallery = () => {
  return (
    <>
      <div className="ptb-100 bg-fef8ef position-relative">
        <img
          src="/images/online-photography/shape6.png"
          alt="shape6"
          className="op-shape6 d-none d-xxl-block"
        />

        <div className="container">
          <div className="section-title">
            <span className="sub-title">Photo gallery</span>
            <h2>Elevate Your Photography Game with Expert Coaching</h2>
          </div>

          <ResponsiveMasonry
            columnsCountBreakPoints={{
              300: 1,
              576: 2,
              992: 3,
            }}
          >
            <Masonry gutter="25px">
              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery1.jpg"
                  alt="gallery"
                />
              </div>

              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery2.jpg"
                  alt="gallery"
                />
              </div>

              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery3.jpg"
                  alt="gallery"
                />
              </div>

              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery4.jpg"
                  alt="gallery"
                />
              </div>

              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery6.jpg"
                  alt="gallery"
                />
              </div>

              <div className="op-gallery-card mb-0">
                <img
                  src="/images/online-photography/gallery5.jpg"
                  alt="gallery"
                />
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <img
          src="/images/online-photography/shape7.png"
          alt="shape7"
          className="op-shape7 d-none d-xxl-block"
        />
      </div>
    </>
  );
};

export default PhotoGallery;

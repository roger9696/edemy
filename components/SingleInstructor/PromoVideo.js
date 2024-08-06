import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const PromoVideo = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/z3FA2kALScU?si=nLBQDyTJbGQFA_52",
        ]}
      />

      <div className="instructor-video-area">
        <div className="container">
          <div className="instructor-video-box">
            <div className="image">
              <img
                src="/images/instructor-home/video.jpg"
                className="shadow"
                alt="image"
              />
            </div>
            <div
              className="video-btn"
              onClick={() => setToggler(!toggler)}
            >
              <i className="flaticon-play"></i>
            </div>
          </div>
        </div>

        <div className="video-wave-shape">
          <img src="/images/instructor-home/video-wave.png" alt="image" />
        </div>
        <div className="instructor-video-shape">
          <img src="/images/instructor-home/events/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PromoVideo;

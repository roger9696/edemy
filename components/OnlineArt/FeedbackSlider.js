import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const FeedbackSlider = () => {
  return (
    <>
      <div className="row justify-content-center align-items-center oa-feedback-area">
        <div className="col-lg-7 col-md-12">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="oa-feedback-slides"
          >
            <SwiperSlide>
              <div className="oa-single-feedback-item">
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/online-art/feedback.svg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>Python Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas accumsan lacus vel facilisis lorem ipsum dolor sit
                  amet
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="oa-single-feedback-item">
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/online-art/feedback.svg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>James Andy</h3>
                    <span>Project Management Expert</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas accumsan lacus vel facilisis lorem ipsum dolor sit
                  amet
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="oa-single-feedback-item">
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/online-art/feedback.svg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Lina Ninja</h3>
                    <span>Illustrator Expert</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas accumsan lacus vel facilisis lorem ipsum dolor sit
                  amet
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="col-lg-5 col-md-12">
          <div className="oa-feedback-image">
            <img src="/images/online-art/feedback.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;

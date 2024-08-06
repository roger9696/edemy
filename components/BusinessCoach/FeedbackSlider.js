import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-area bg-f9f9f9 pt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="coaching-feedback-image">
                <img
                  src="/images/business-coach/business-woman.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="coaching-feedback-slides"
              > 
              <SwiperSlide>
                <div className="single-coaching-feedback-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <div className="client-info d-flex align-items-center">
                    <img src="/images/user/user1.jpg" alt="user" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="single-coaching-feedback-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <div className="client-info d-flex align-items-center">
                    <img src="/images/user/user2.jpg" alt="user" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="single-coaching-feedback-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <div className="client-info d-flex align-items-center">
                    <img src="/images/user/user3.jpg" alt="user" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;

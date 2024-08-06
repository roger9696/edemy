import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="oa-subscribe-area">
        <div className="container">
          <div className="oa-inner-subscribe ptb-100">
            <div className="subscribe-content">
              <span className="sub-title">Newsletter</span>
              <h2 className="font-weight-black">Subscribe To Our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <form className="newsletter-form">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="Enter your email address"
                  name="EMAIL"
                  required
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-user"></i>Subscribe Now<span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;

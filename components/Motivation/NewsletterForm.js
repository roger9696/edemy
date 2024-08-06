import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="motivation-subscribe-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="subscribe-content">
            <span className="sub-title">Newsletter</span>
            <h2 className="jost-font font-weight-bold">
              Subscribe To My Newsletter
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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

        <div className="motivation-shape-7">
          <img src="/images/motivation/motivation-shape-7.png" alt="image" />
        </div>
        <div className="motivation-shape-8">
          <img src="/images/motivation/motivation-shape-8.png" alt="image" />
        </div>
        <div className="motivation-shape-9">
          <img src="/images/motivation/motivation-shape-9.png" alt="image" />
        </div>
        <div className="motivation-shape-10">
          <img src="/images/motivation/motivation-shape-10.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;

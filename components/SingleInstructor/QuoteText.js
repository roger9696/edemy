import React from "react";

const QuoteText = () => {
  return (
    <>
      <div className="instructor-quote-area ptb-100">
        <div className="container">
          <div className="instructor-quote-inner-box">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="instructor-quote-image">
                  <img
                    src="/images/instructor-home/quote/quote.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="instructor-quote-content">
                  <img
                    src="/images/instructor-home/quote/quotation.svg"
                    alt="image"
                  />
                  <p>
                    The dream begins, most of the time, with a teacher who
                    believes in you, who tugs and pushes and leads you on to the
                    next plateau, sometimes poking you with a sharp stick called
                    truth.
                  </p>
                  <span>Dan Rather</span>
                </div>
              </div>
            </div>
            <div className="quote-shape">
              <img src="/images/instructor-home/quote/shape.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteText;

import React from 'react';
import Fitness from "../Image/Image & Icon/Group 87.png";
import Dumb from "../Image/Image & Icon/Group 88.png";
import Gift from "../Image/Image & Icon/gift-2.png";

const WhyChoose = () => {
    return (
      <section className="container text-center why-choose-us">
        <h1>
          <span className="text-warning">WHY</span> CHOOSE US
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center p-3 d-flex justify-content-center align-items-center">
                <img src={Fitness} alt="" className="feature-icon" />
                <h2>FREE FITNESS TRAINING</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nihil.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3 d-flex justify-content-center align-items-center">
                <img src={Dumb} alt="" className="feature-icon" />
                <h2 >TONS OF CARDIO & STRENGTH</h2>
                <p >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nihil.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3 d-flex justify-content-center align-items-center">
                <img src={Gift} alt="" className="feature-icon" />
                <h2 >NO COMMENT MEMBERSHIP</h2>
                <p >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChoose;
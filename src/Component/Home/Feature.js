import React from 'react';
import Watch from "../Image/Image & Icon/Group 80.png"
import Dumb from "../Image/Image & Icon/Group 81.png"
import Protein from "../Image/Image & Icon/Group 82.png";


const Feature = () => {
    return (
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center card-1 p-3 d-flex justify-content-center align-items-center">
                <img src={Watch} alt="" className="feature-icon" />
                <h1 className="text-light">PROGRESSION</h1>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nihil.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center card-2 p-3 d-flex justify-content-center align-items-center">
                <img src={Dumb} alt="" className="feature-icon" />
                <h1 className="text-warning">WORKOUT</h1>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nihil.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center card-3 p-3 d-flex justify-content-center align-items-center">
                <img src={Protein} alt="" className="feature-icon" />
                <h1 className="text-light">NUTRITION</h1>
                <p className="text-light">
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

export default Feature;
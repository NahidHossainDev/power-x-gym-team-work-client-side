import React from 'react';

const ClassesCard = ({img,training}) => {
    return (
      <div className="col-lg-4 col-md-6  mt-5 justify-content-center d-flex">
        <div className="card class-card position-relative">
          <img src={img} alt="" />
          <button className="class-card-btn">
            {training} <span style={{}}>&#8594;</span>
          </button>
        </div>
      </div>
    );
};

export default ClassesCard;
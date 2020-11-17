import React from 'react';

const ClassDetails = ({ data }) => {
    return (
        <div className="col-md-6 col-sm-12 mb-4">
        <div className="day_card p-3">
            <h5>{data.classDay}</h5>
            <h6 className="date-text">{data.classHour}</h6>
        </div>
    </div>
    );
};

export default ClassDetails;
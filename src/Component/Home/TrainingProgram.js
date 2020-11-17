import React from 'react';

const TrainingProgram = () => {
    return (
        <section className="container training-program text-center">
            <h1 className="mb-5">TRAINING <span className="text-warning">PROGRAM</span></h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card card1 mt-5 ">
                        <button className="btn-training">YOGA TRAINING SESSION <span style={{padding:"50px 20px"}}>&#8594;</span></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card2 mt-5 ">
                        <button className="btn-training">CARDIO TRAINING SESSION 	<span style={{padding:"50px 20px"}}>&#8594;</span></button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default TrainingProgram;
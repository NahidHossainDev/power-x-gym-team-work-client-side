import React from 'react';
import Img from "../Image/Image & Icon/aboutUs.jpg"
const AboutUs = () => {
    return (
      <section className="container about-us" id="aboutUs">
        <div className="row">
          <div className="col-md-6 image">
            <img src={Img} alt="" style={{ width: "100%", height: "90%" }} />
          </div>
          <div className="col-md-6 pl-5 text">
            <h1>ABOUT US</h1>
            <h2 className="text-warning">WE ARE HERE TO DREAM!</h2>
            <h2>OUR TEAM IS HERE SERVE YOU</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              minima ex natus sit veritatis modi sequi necessitatibus delectus
              dolorum, hic rerum! Doloribus, suscipit. Porro dolores ipsum hic,
              aliquid quia sunt quisquam nemo voluptatibus. Cumque, quae
              maiores! Sit, saepe recusandae minima ullam officiis ut quam nulla
              perspiciatis alias voluptates, ratione vero?
            </p>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;
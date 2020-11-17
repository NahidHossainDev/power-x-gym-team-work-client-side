import React, { useState, useEffect } from 'react';
import NavbarCont from '../Navbar/NavbarCont';
import Footer from '../Footer/Footer';
import ClassesCard from './ClassesCard';

const OurClasses = () => {
  
  const [classData, setClassData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/ourClasses")
      .then(res => res.json())
      .then(data => setClassData(data));
  },[])
    return (
      <div>
        <NavbarCont>
          <h1 className="text-light text-center">OUR CLASSES</h1>
        </NavbarCont>
          <div className="container">
            <div className="row ">
              {classData.map((d, i) => (
                <ClassesCard img={d.img} training={d.training} />
              ))}
            </div>
          </div>
        <Footer />
      </div>
    );
};

export default OurClasses;
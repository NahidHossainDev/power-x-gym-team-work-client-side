import React from 'react';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import NavbarCont from '../Navbar/NavbarCont';
import StepContext from './StepContext';
import Steps from './Steps';



const FirstPart = () => {
    return (
        <div>
            <NavbarCont>
                <h1 className="text-light text-center">Your Gym Membership</h1>
            </NavbarCont>
            <StepContext>
                <Steps></Steps>
            </StepContext>
            <Footer></Footer>
        </div>
    );
};

export default FirstPart;
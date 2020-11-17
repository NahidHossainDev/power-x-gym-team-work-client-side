import React from 'react';
import NavbarCont from '../Navbar/NavbarCont';
import Header from './Header';
import Feature from './Feature';
import AboutUs from './AboutUs';
import TrainingProgram from './TrainingProgram';
import WhyChoose from './WhyChoose';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavbarCont>
                <Header/>
            </NavbarCont>
            <Feature />
            <AboutUs />
            <TrainingProgram />
            <WhyChoose />
            <Footer/>
        </div>
    );
};

export default Home;
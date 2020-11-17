import React from 'react';
import NavbarCont from "../Navbar/NavbarCont";
import Footer from "../Footer/Footer";
import PricingCard from './PricingCard';

const pricingData = [
    {class:"card-1",
    title: "ADVANCE PLANE",
    price: 140
    },
    
    {class:"card-2",
    title: "BASIC PLAN",
    price: 120
    },
    
    {class:"card-3",
    title: "BEGINNERS",
    price:90},
]
const Pricing = () => {
    return (
      <div className="pricing">
        <NavbarCont>
          <h1 className="text-light text-center">Pricing Plans</h1>
        </NavbarCont>
        <section className="container">
          <h1 className="text-center">
            <span className="text-warning">CHOOSE THE OFFER </span> THAT SUITS
            YOU
          </h1>
          <div className="row">
            {pricingData.map((d, i) => (
              <PricingCard key={i} cls={d.class} price={d.price} title={d.title}  />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
};

export default Pricing;
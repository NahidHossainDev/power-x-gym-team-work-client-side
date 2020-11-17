import React from 'react';

const PricingCard = ({cls, price, title}) => {
    return (
        <div className="col-md-4">
            <div className={`card text-center ${cls} p-5 `}>
            <p className="text-warning">BILLED MONTHLY</p>
            <h1 className="text-light">{title}</h1>
            <p className="price text-warning">{price}</p>
            <ul className="text-light">
                <li>Mobile-optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Outstanding</li>
                <li>Happy Customer</li>
            </ul>
            <button className="btn-main"><a href="/payment">PURCHASE</a></button>
          </div>
        </div>
    );
};

export default PricingCard;
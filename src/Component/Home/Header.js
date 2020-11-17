import React from 'react';
import Video from "../Image/180419_Boxing_15_06.mp4"

const Header = () => {
    return (
      <div className="row container py-5">
        <div className="col-md-6 text-light  py-5">
          <h1 style={{fontSize:"80px"}}>
            THE BEST FITNESS STUDIO IN TOWN
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo
            quis explicabo aliquam. Sapiente corrupti veniam, doloremque beatae
            quam possimus numquam sunt ab qui optio mollitia consequatur debitis
            incidunt nulla!
          </p>
          <button className="btn-main">JOIN US</button>
        </div>
        <div className="col-md-6  py-5 d-flex align-items-center">
          <video controls autoPlay  loop
            style={{ maxWidth: "500px", maxHeight: "400px" }}
          >
            <source
              src={Video}
              type=""
              style={{ maxWidth: "500px", maxHeight: "400px", borderRadius:"10px" }}
            />
          </video>
        </div>
      </div>
    );
};

export default Header;
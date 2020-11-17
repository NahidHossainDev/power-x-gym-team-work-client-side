import React from "react";
import Youtube from "../Image/Image & Icon/bxl-youtube.png";
import Facebook from "../Image/Image & Icon/bxl-facebook.png";
import Twitter from "../Image/Image & Icon/bxl-twitter.png";
import Instra from "../Image/Image & Icon/bxl-instagram.png";

const Footer = () => {
  return (
    <section className=" footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="text-light">
              POWER <span className="text-warning">X</span>
            </h1>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li>Need Help?</li>
                  <li>Help center</li>
                  <li>Email support</li>
                  <li>Live Chat</li>
                  <li>Send us feedback</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Digital Resources</li>
                  <li>Articles</li>
                  <li>E-books</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Connect with Us</li>
                  <li className="connect-link">
                    <a href="/youtube">
                      <img src={Youtube} alt="" />
                    </a>
                    <a href="/youtube">
                      <img src={Facebook} alt="" />
                    </a>
                    <a href="/youtube">
                      <img src={Twitter} alt="" />
                    </a>
                    <a href="/youtube">
                      <img src={Instra} alt="" />
                    </a>
                  </li>
                  <li>Forum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Join our newsletter</li>
                  <li>
                    Get exclusive news, features, and updates from the
                    Sheredder.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <small className="text-center" style={{marginTop:"50px", color:"lightgray", display:"block"}}>POWER X {(new Date().getFullYear())}  |  All Right Reserve</small>
      </div>
    </section>
  );
};

export default Footer;

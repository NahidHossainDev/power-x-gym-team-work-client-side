import React from 'react';
import {Navbar, Nav, } from "react-bootstrap"
const NavbarCont = (props) => {

  const style = {
    navItem: {
      color: "white",
      fontSize: "25px",
      padding:"0 20px",
    },
    nav: {
      width: "1000px",
    }
    }
    return (
      <div className="nav-container">
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand href="/home" className="text-light" style={{fontSize:'35px'}}>
              POWER <span className="text-warning">X</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}} />
            <Navbar.Collapse id="basic-navbar-nav">
              <div  style={style.nav}>
                <Nav className="nav">
                  <Nav.Link href ="/" activeClassName="active" exact={true} style={style.navItem}>Home</Nav.Link>
                  <Nav.Link href ="/service" style={style.navItem}>Service</Nav.Link>
                  <Nav.Link href ="/ourClasses" activeClassName="active" style={style.navItem}>Our Class</Nav.Link>
                  <Nav.Link href ="#aboutUs" style={style.navItem}>About Us</Nav.Link>
                  <Nav.Link href ="/pricing" style={style.navItem}>Pricing</Nav.Link>
                  <Nav.Link href ="#footer" style={style.navItem}>Contact Us</Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className="container d-flex align-items-center justify-content-center nav-child"> {props.children}</div>
      </div>
    );
};

export default NavbarCont;
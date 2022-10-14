import React from "react";
import { Link, NavLink } from "react-router-dom";
import mw from "./mw.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"white",position:"sticky"}}>
      <div className="container" style={{color:"black",borderBottom:"2px solid black"}}>
        <Link exact to="/">
          <img src={mw} width="50px" height="50px" style={{borderRadius:"50%",margin:"0% 5px -8px -35px"}} />
        </Link>
        <h3 style={{margin:"0px 55% 0px 5px"}}>My World</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin:"0% 7% 0% 27%",color:"black"}}>
            <li className="nav-item" style={{color:"black"}}>
              <NavLink className="nav-link" exact to="/" style={{color:"black"}}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about" style={{color:"black"}}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/details" style={{color:"black"}}>
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact" style={{color:"black"}}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact
        to="/login" style={{color:"black"}}>Login</NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
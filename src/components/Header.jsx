import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <div className="container">
          <a href="#/" id="branding">
            <img src="assets/images/logo.png" alt="" className="logo" />
            <div className="logo-copy">
              <h1 className="site-title">Company Name</h1>
              <small className="site-description">Tagline goes here</small>
            </div>
          </a>

          <div className="main-navigation">
            <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
            <ul className="menu">
              <li className="menu-item">
                <NavLink activeClassName="current-menu-item" exact to="/">Home</NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeClassName="current-menu-item" to="/about">About</NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeClassName="current-menu-item" to="/review">Movie reviews</NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeClassName="current-menu-item" to="/joinus">Join us</NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeClassName="current-menu-item" to="/contact">Contact</NavLink>
              </li>
            </ul>

            <form className="search-form">
              <input type="text" placeholder="Search..." />
              <button><i className="fa fa-search"></i></button>
            </form>
          </div>

          <div className="mobile-navigation"></div>
        </div>
      </header>
    );
  }
}

export default Header;

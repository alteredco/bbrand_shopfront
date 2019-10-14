import React, { Component } from "react";
import M from "materialize-css";
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {
    isSideMenuOpen: false
  }

  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }

  toggleSideMenu= () =>{
    const currentState = this.state.isSideMenuOpen
    this.setState( {isSideMenuOpen: !currentState });
  }

  render() {
    let menuClass = this.state.isSideMenuOpen?'side-nav-active':'side-nav'
    return (
      <React.Fragment>
      <div className="navbar-fixed">
        <nav>
        <div className="NavBar-items Nav-wrapper ">
            <NavLink to="/"
              className="NavBar-logo brand-logo white-text"
            >
              B.BRAND
            </NavLink>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger white-text" onMouseEnter={ this.toggleSideMenu.bind(this)}><i className="small material-icons">menu</i></a>
            <ul className="NavBar-list hide-on-med-and-down">
              <li className="NavBar-listItem">
                <NavLink to="/new" className="white-text">
                  NEW
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  {" "}
                  TOPS
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  {" "}
                  TROUSERS
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  DRESSES
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  ACCESSORIES
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  CLEARANCE
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  About
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  Contact
                </NavLink>
              </li>
              <li className="NavBar-listItem">
                <NavLink to="/" className="white-text">
                  <i className="small material-icons">shopping_cart</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className={menuClass} id="mobile-demo">
      <li>
                <a href="/new">
                  NEW
                </a>
              </li>
              <li>
                <a href="/" >
                  {" "}
                  TOPS
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  TROUSERS
                </a>
              </li>
              <li>
                <a href="/">
                  DRESSES
                </a>
              </li>
              <li>
                <a href="/">
                  ACCESSORIES
                </a>
              </li>
              <li>
                <a href="/">
                  CLEARANCE
                </a>
              </li>
              <li>
                <a href="/">
                  About
                </a>
              </li>
              <li>
                <a href="/" >
                  Contact
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">shopping_cart</i>
                </a>
              </li>
          </ul>
          </React.Fragment>
    );
  }
}

export default NavBar;

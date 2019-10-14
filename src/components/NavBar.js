import React, { Component } from "react";
import M from "materialize-css";

class NavBar extends Component {
  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }
  render() {
    return (
      <React.Fragment>
      <div className="navbar-fixed">
        <nav>
        <div className="NavBar-items Nav-wrapper ">
            <a
              href="/"
              className="NavBar-logo brand-logo white-text"
            >
              B.BRAND
            </a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger white-text"><i className="small material-icons">menu</i></a>
            <ul className="NavBar-list hide-on-med-and-down">
              <li className="NavBar-listItem">
                <a href="/new" className="white-text">
                  NEW
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  {" "}
                  TOPS
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  {" "}
                  TROUSERS
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  DRESSES
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  ACCESSORIES
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  CLEARANCE
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  About
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  Contact
                </a>
              </li>
              <li className="NavBar-listItem">
                <a href="/" className="white-text">
                  <i className="small material-icons">shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="side-nav" id="mobile-demo">
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

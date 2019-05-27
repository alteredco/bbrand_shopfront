import React, {Component} from 'react';
import './NavBar.css';
import M from "materialize-css";

class NavBar extends Component {
  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }
  render() {
    return (
      <div  className="NavBar-items nav-wrapper">
        <a href = "/" className= "NavBar-logo brand-logo left grey-text text-darken-3">
          B.BRAND</a>
          <ul className="NavBar-list right hide-on-med-and-down">
            <li className="NavBar-listItem"><a href="/new" className="grey-text text-darken-3">NEW</a></li>
            <li className="NavBar-listItem"><a href="/" className="grey-text text-darken-3"> TOPS</a></li>
            <li className="NavBar-listItem"><a href="/" className="grey-text text-darken-3"> TROUSERS</a></li>
            <li className="NavBar-listItem"><a href="/" className="grey-text text-darken-3">DRESSES</a></li>
            <li className="NavBar-listItem"><a href="/" className="grey-text text-darken-3">ACCESSORIES</a></li>
            <li className="NavBar-listItem"><a href="/" className="grey-text text-darken-3">CLEARANCE</a></li>
            <li className="NavBar-listItem">
              <a href="/" className="grey-text text-darken-3">About</a>
            </li>
            <li className="NavBar-listItem">
              <a href="/" className="grey-text text-darken-3">Contact</a>
            </li>
            <li className="NavBar-listItem">
              <a href="/" className="grey-text text-darken-3"><i class="small material-icons">shopping_cart</i>0</a>
            </li>
          </ul>
      </div>
    )
  }
}

export default NavBar;
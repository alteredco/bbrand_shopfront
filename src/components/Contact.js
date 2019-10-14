import React, {Component} from 'react';
import M from "materialize-css";

class Contact extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return(
      <div className="Contact-wrapper">
        <div className="row">
          <div className="col sm6 m3">
          <a href = "/" className= "Contact-logo brand-logo left grey-text text-darken-3">
          B.BRAND</a>
          </div>
          <div className="col sm6 m3">
            <ul className="Contact-list left">
                <li className="black-text">MENU</li>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Home</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">New</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Tops</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Trousers</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Dresses</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Accessories</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Clearance</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">About</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Contact</li>
              </a>
            </ul>
          </div>
          <div className="col sm6 m3">
            <ul className="Contact-list left">
              <li className="black-text">HELP</li>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Shipping</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Returns</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Sizing</li>
              </a>
            </ul>
          </div>
          <div className="col sm6 m3">
            <ul className="Contact-list">
              <li className="black-text">FOLLOW</li>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Instagram</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Twitter</li>
              </a>
              <a href = "/" className= "Contact-link">
                <li className="grey-text text-darken-2">Facebook</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
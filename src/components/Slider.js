import React, {Component} from 'react';
import './Slider.css';
import pic1 from "../assets/peace_pink_lady.jpg";
import pic2 from "../assets/clothes_rack.jpg";
import pic3 from "../assets/yellow_smile.jpg";
import M from "materialize-css";

class Slider extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    let elem = document.querySelector('.slider');
    M.Slider.init(elem, { 'height' : 700, 'indicators' : true });
    }
  render() {
    return (
      <div className="Slider-wrapper slider">
        <ul className="slides">
          <li>
            <img className="Slider-image responsive-img" src={pic1} alt="pink peace lady"/>
            <div className="caption center-align">
              <h1 className="Slider-headline">What's new in store?</h1>
              <h3>We've got you covered.</h3>
              <a href="/new" className="waves-effect waves-light btn-large light-blue darken-4">SHOP NEW</a>
            </div>
          </li>
          <li>
            <img className="Slider-image responsive-img" src={pic2} alt="clothes rack"/>
            <div className="caption right-align">
              <h1 className="Slider-headline">Style Diva?</h1>
              <h3>Try our  new stylist tool.</h3>
              <a href="link" className="waves-effect waves-light btn-large light-blue darken-4">SHOP STYLES</a>
            </div>
          </li>
          <li>
            <img className="Slider-image responsive-img" src={pic3} alt="lady smiling in yellow"/>
            <div className="caption right-align">
              <h1 className="Slider-headline">Sale on now!!</h1>
              <h3>Items up to 70% off!</h3>
              <a href="link" className="waves-effect waves-light btn-large light-blue darken-4">SHOP CLEARANCE</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Slider;
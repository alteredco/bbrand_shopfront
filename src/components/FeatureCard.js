import React, {Component} from 'react';
import "./FeatureCard.css";
import M from "materialize-css";

class FeatureCard extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {pic, name, price, link} = this.props
    return(
      <div className="Feature-wrapper card-panel hoverable">
        <a href={link}>
          <div className="Feature-image">
          <img className="responsive-img" src={pic} alt={name} />
          <span className="Feature-title grey-text text-darken-3">
            <p>{name}</p> 
            <p>{price}</p>
          </span>
        </div>
        </a>
      </div>
    )
  }
}

export default FeatureCard;
import React, {Component} from 'react';
import M from "materialize-css";

class FeatureCard extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {pic, name, price} = this.props
    return(
      <div className="Feature-wrapper card-panel hoverable">
          <span className="Feature-title grey-text text-darken-3">
            <p>{name}</p> 
            <p>{price}</p>
          </span>
        <a href="/new">
          <figure className="Feature-image">
          <img className="responsive-img" src={pic} alt={name} />
        </figure>
        </a>
      </div>
    )
  }
}

export default FeatureCard;
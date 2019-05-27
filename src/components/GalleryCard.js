import React, {Component} from 'react';
import "./GalleryCard.css";
import M from "materialize-css";

class GalleryCard extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {pic, name, price, link} = this.props
    return(
      <div className="Gallery-wrapper card-panel">
          <div className="Gallery-image">
          <a href={link}>
            <img className="responsive-img" src={pic} alt={name} />
            <span className="Gallery-title grey-text text-darken-3">
              <p>{name}</p> 
              <p>{price}</p>
            </span>
          </a>
          <span className="cart-btn waves-effect waves-dark btn-sm white darken-4">
              <p>Add to cart <i class="small material-icons">shopping_cart</i></p>
          </span>
        </div>
      </div>
    )
  }
}

export default GalleryCard;
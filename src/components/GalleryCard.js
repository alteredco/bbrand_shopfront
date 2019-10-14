import React, {Component} from 'react';
import PropTypes from 'prop-types';
import M from "materialize-css";

class GalleryCard extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  static propTypes = {
    pic: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    id: PropTypes.number
  }

  render() {
    const {
      pic, 
      name, 
      price,
      index
    } = this.props
    return(
      <div className="Card-wrapper card-panel">
        <figcaption className="Card-title grey-text text-darken-3">
          <p>{name}</p> 
          <p>{"$"+price}</p>
        </figcaption>
        <figure className="Card-image">
          <a href={"/item/" +index}>
            <img className="responsive-img" src={pic} alt={name} />
          </a>
        </figure>
        <span className="cart-btn waves-effect waves-dark btn-sm white darken-4">
          <p>Add to cart <i className="small material-icons">shopping_cart</i></p>
        </span>
      </div>
    )
  }
}

export default GalleryCard;
import React, {Component} from 'react';
import "../components/ItemImg.css";
import M from "materialize-css";

class ItemImg extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {pic, name, price, color} = this.props
    return(
      <div className="ItemImg-wrapper card-panel">
          <div className="ItemImg-image">
          <img className="responsive-img" src={pic} alt={name} />
        </div>
        <h3>{price}</h3>
        <h4 className="ItemName greyText">{name}</h4> 
        <div className="row">
          <div className="color"> White</div>
          <div className="size"> <input type="menu"></input></div>
        </div>
        <span className="cart-btn waves-effect waves-dark btn-sm white darken-4">
              <button>Add to cart cart</button>
          </span>
      </div>
    )
  }
}

export default ItemImg;
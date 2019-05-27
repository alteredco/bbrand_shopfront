import React, {Component} from 'react';
import "../components/ItemImg.css";
import M from "materialize-css";

class ItemImg extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {pic, name} = this.props
    return(
      <div className="ItemImg-wrapper card-panel">
          <div className="ItemImg-image">
          <img className="responsive-img" src={pic} alt={name} />
        </div>
        <h3>{name}</h3> 
      </div>
    )
  }
}

export default ItemImg;
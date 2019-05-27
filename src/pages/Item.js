import React, {Component} from 'react';
import "../pages/Item.css";
import M from "materialize-css";
import NavBar from '../components/NavBar';
import ItemImg from '../components/ItemImg';

class Item extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const {name, price} = this.props
    return(
      <div>
        <div className="NavRow row">
          <NavBar />
        </div>
        <div className="Item-wrapper card-panel">
          <ItemImg 
              pic="https://i.ibb.co/xj7c8X0/peacock-heels.jpg"
              name = "Peacock Heels"
              price = "$55"
          />
        </div>
      </div>
    )
  }
}

export default Item;
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
    const {pic, name, price} = this.props
    return(
      <div>
        <div className="NavRow row">
          <NavBar />
        </div>
        <div className="Item-wrapper card-panel">
          <ItemImg 
              pic="https://i.ibb.co/D85Jw5w/white-frill-dress.jpg"
              name = "White Frill Dress"
              price = "$30"
          />
        </div>
      </div>
    )
  }
}

export default Item;
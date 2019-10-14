import React, {Component} from 'react';
import M from "materialize-css";
import ItemImg from '../components/ItemImg';

class Item extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return(
        <React.Fragment>
        <div className="Item-wrapper card-panel">
          <ItemImg 
              pic="https://i.ibb.co/xj7c8X0/peacock-heels.jpg"
              name = "Peacock Heels"
              price = "$55"
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Item;
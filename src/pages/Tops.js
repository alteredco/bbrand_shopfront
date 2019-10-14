import React, {Component} from 'react';
import './New.css';
import GalleryCard from '../components/GalleryCard';
import M from "materialize-css";

class New extends Component {
  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <div className="row">
        <div className="New-wrapper">
        <div className="New-title">
          <h1>New Products</h1>
          <h5 className="grey-text text-darken-2">Newest In!</h5>
        </div>
        <div className="New-feature row">
          <div className="col sm12 m4">
            <GalleryCard
            pic="https://i.ibb.co/D85Jw5w/white-frill-dress.jpg"
            name = "White Frill Dress" 
            price = "$30"
            link = "/item"
            />
          </div>
          <div className="col sm12 m4">
            <GalleryCard
            pic="https://i.ibb.co/cJtFFGv/colorblock-sneaks.jpg"
            name = "Colorblock Sneakers" 
            price = "$50"
            />
          </div>
          <div className="col sm12 m4">
            <GalleryCard 
            pic="https://i.ibb.co/Hds8RQS/rose-dress.jpg"
            name = "Rambling Rose Dress"
            price = "$75"
            />
          </div>
        </div>
        <div className="New-feature row">
          <div className="col sm12 m4">
            <GalleryCard
            pic="https://i.ibb.co/pjg6xMh/purple-skirt.jpg"
            name = "Claret Pleated Skirt" 
            price = "$30"
            link = "/item"
            />
          </div>
          <div className="col sm12 m4">
            <GalleryCard
            pic="https://i.ibb.co/6DTh89N/pink-brogues.jpg"
            name = "Rose Brogues" 
            price = "$60"
            />
          </div>
          <div className="col sm12 m4">
            <GalleryCard 
            pic="https://i.ibb.co/xj7c8X0/peacock-heels.jpg"
            name = "Peacock Heels"
            price = "$55"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    )
  }
}

export default New;
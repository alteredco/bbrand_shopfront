import React, {Component} from 'react';
import "./Feature.css";
import M from "materialize-css";
import FeatureCard from "./FeatureCard";

class Feature extends Component {
  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }
  render() {
    const {name, price} = this.props
    return(
      <div className="Feature-wrapper">
        <div className="FeatureTitle">
          <h1>Featured Products</h1>
          <h5 className="grey-text text-darken-2">Check out new and popular products</h5>
        </div>
        <div className="row">
          <div className="col sm12 m4">
            <FeatureCard
            pic="https://i.ibb.co/D85Jw5w/white-frill-dress.jpg"
            name = "White Frill Dress" 
            price = "$30"
            />
          </div>
          <div className="col sm12 m4">
            <FeatureCard
            pic="https://i.ibb.co/cJtFFGv/colorblock-sneaks.jpg"
            name = "Colorblock Sneakers" 
            price = "$50"
            />
          </div>
          <div className="col sm12 m4">
            <FeatureCard 
            pic="https://i.ibb.co/Hds8RQS/rose-dress.jpg"
            name = "Rambling Rose Dress"
            price = "$75"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Feature;
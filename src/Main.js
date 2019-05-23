import React, {Component} from 'react';
import "./Main.css";
import M from "materialize-css";

class Main  extends Component {
  componentDidMount() {
    // Auto initialize all the Materialize things!
    M.AutoInit();
  }
  render() {
    return(
      <div className="Main-wrapper">
        <div className="Main-heading left-align">
          <h1>Design with a difference.</h1>
          <h5 className="Main-subtitle grey-text text-darken-3">Get 10% off your first purchase and give 2% of the price of your purchase to Rainforest Alliance.</h5>
        </div>
        <div className="Main-articles row">
          <div className="col sm12 m6">
            <p className="Main-article flow-text grey-text text-darken-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div className="col sm12 m6">
            <p className="Main-article flow-text grey-text text-darken-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Main;
import React, {Component} from 'react';
import M from "materialize-css";

class Newsletter extends Component {
  componentDidMount() {
      // Auto initialize all the Materialize things!
      M.AutoInit();
  }
  render() {
    return(
      <div className="Newsletter-wrapper">
        <div className="Newsletter-title">
          <h2>Get Our Hotlist Newsletter</h2>
          <h5 className="Newsletter-subtitle">Sign up to receive updates from our shop, including new items and exclusive discounts.</h5>
        </div>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
                  <button className="btn waves-effect waves-light btn-large light-blue darken-4" type="submit" name="action">Submit <i className="material-icons right">send</i>
                </button>
                <label>Enter your email</label>
                <span className="helper-text" data-error="please enter a valid email"></span>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Newsletter;

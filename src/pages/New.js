import React, {Component} from 'react';
import Gallery from '../components/Gallery';
import M from "materialize-css";

class New extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <div className="New-wrapper">
          <div className="New-title">
            <h1>New Products</h1>
            <h5 className="grey-text text-darken-2">Newest In!</h5>
          </div>
          <main className="New-gallery">
            <Gallery />
          </main>
          </div>
        </React.Fragment>
    )
  }
}

export default New;
import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './NavBar';
import Slider from './Slider';
import Main from './Main';
import Feature from './Feature';
import Newsletter from './Newsletter';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Main />
      <Feature />
      <Newsletter />
      <Contact />
      <div className="footer">
        <h5>©Wendy Kakuda 2019</h5>
      </div>
    </div>
  );
}

export default App;

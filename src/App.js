import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Main from './components/Main';
import Feature from './components/Feature';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';

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

import React from 'react';
import Slider from '../components/Slider';
import Main from '../components/Main';
import Feature from '../components/Feature';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="Home">
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

export default Home;

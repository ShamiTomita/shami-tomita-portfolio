import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';

const About = () => {
  const aboutRef = useNav('Home');
  return(
    <section ref={aboutRef} id='aboutContainer'>
      <img
        src='https://images.wallpaperscraft.com/image/single/moss_grass_tree_stump_wood_106893_1280x720.jpg'
        alt='moss background'
      />
      <div>
        <h3>ABOUT ME</h3>
        <p>Welcome to my portfolio! Please Hire Me also I'm NOT DESPERATE</p>
      </div>
    </section>
  );
};

export default About;

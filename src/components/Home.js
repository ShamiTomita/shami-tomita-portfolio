import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';

const Home = () => {
  const homeRef = useNav('Home');
  return(
    <section ref={homeRef} id='homeContainer'>
      <div>
        <h1>Shami Tomita</h1>
        <p>Welcome to my portfolio! Please Hire Me also I'm DESPERATE</p>
      </div>
      <img
        src='https://images.wallpaperscraft.com/image/single/moss_grass_tree_stump_wood_106893_1280x720.jpg'
        alt='moss background'
      />

    </section>
  );
};

export default Home;

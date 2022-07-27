import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';
import Marquee from "react-fast-marquee"

const Home = () => {
  const homeRef = useNav('Home');
  return(
    <section ref={homeRef} id='homeContainer'>
      
      <div>
        <h2>I'm Shami Tomita</h2>
        <h3>Fullstack Dev | Pastry Chef | Music Lover | Cat Parent</h3>
        <p>Welcome to my portfolio! Please Hire Me also I'm DESPERATE</p>
      </div>
      <img className="shami" src="./portfolio_pic.png" alt=""/>
      <img
        src='https://images.wallpaperscraft.com/image/single/moss_grass_tree_stump_wood_106893_1280x720.jpg'
        alt='moss background'
      />

    </section>
  );
};

export default Home;

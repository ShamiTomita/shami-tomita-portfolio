import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';
import Marquee from "react-fast-marquee"

const Home = () => {
  const homeRef = useNav('Home');
  return(
    <section ref={homeRef} id='homeContainer'>

      <div className="home">
        <Marquee
          gradient={false}
          gradientColor={[162, 171, 106]}
          direction="left"
          speed={80}
          className="ticker"
        >
          Hola! こんにちは! Hello! Hola! こんにちは! Hello! Hola! こんにちは! Hello!
        </Marquee>
        <img className="shami" src="./portfolio_pic.png" alt="picture of shami :)"/>
        <h2>I'm Shami Tomita</h2>
        <h3>Fullstack Dev | Pastry Chef | Music Lover | Cat Parent</h3>
        <p>Welcome to my portfolio! Please Hire Me also I'm DESPERATE</p>
      </div>




    </section>
  );
};

export default Home;

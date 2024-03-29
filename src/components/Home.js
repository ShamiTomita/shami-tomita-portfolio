import React from 'react'
import { useNav } from '../customHooks/useNav';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './Components.css';
import Marquee from "react-fast-marquee"

const Home = () => {
  const homeRef = useNav('Home');
  library.add(fab)
  return(
    <>
      <section ref={homeRef} id='homeContainer'>
        <div className="ticker">
          <Marquee
            gradient={false}
            gradientColor={[162, 171, 106]}
            direction="left"
            speed={80}
            className="marquee"
          >
            <h1 className="word">
              🪴 Hola! 🌸
            </h1>
            <h1 className="word">
              🍛 こんにちは! 🍰
            </h1>
            <h1 className="word">
              🕹 Hello! 💻
            </h1>
          </Marquee>
        </div>
        <div className="home">

          <div>
            <img className="shami" src="./portfolio_pic.png" alt="shami :)"/>

          </div>

          <div className="homeblurb">
            <h1><strong>Shami Tomita</strong></h1>
            <br/>
            <h2> Open Source Contributor | Full Stack Dev | Pastry Chef</h2>
            <br/>
            <p><strong> Contact Me @ <a href="mailto:shamitomita@gmail.com">ShamiTomita@gmail.com</a> |
              <a href="../resume.pdf" download = "jose_miguel_tomita_rodriguez_resume.pdf">
                Resume
              </a>
            </strong></p>

          </div>
        </div>


        <div className="bottom">
          <Marquee>
            <FontAwesomeIcon className="icon" icon="fab fa-js" />
            <img className="icon" src="./icons8-html-5.svg" alt=""/>

            <img className="icon" src="./icons8-css3.svg" alt=""/>

            <FontAwesomeIcon  className="icon" icon="fab fa-github" />
            <FontAwesomeIcon  className="icon" icon="fab fa-react" />
            <img className="icon" src="./icons8-redux.svg" alt=""/>

            <img className="icon" src="./icons8-ruby-programming-language.svg" alt=""/>
            <img className="icon" src="./icons8-ruby-on-rails.svg" alt=""/>

          </Marquee>

        </div>

      </section>
    </>
  );
};

export default Home;

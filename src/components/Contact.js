import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';

const Home = () => {
  const contactRef = useNav('Home');
  return(
    <section ref={contactRef} id='contactContainer'>
      <div>
        <h3>Contact</h3>
        <p></p>
      </div>
    </section>
  );
};

export default Home;

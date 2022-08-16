import React from 'react'
import { useNav } from '../customHooks/useNav';
import './Components.css';

const Home = () => {
  const contactRef = useNav('Home');
  return(
    <section ref={contactRef} id='contactContainer'>
      <div className="contact">
        <div>
          <h1>May I take your hat Sir?</h1>
        </div>
        <div>
          <p>FORM</p>
        </div>
        <div>
          <p>Thankyou!</p>
        </div>
      </div>

    </section>
  );
};

export default Home;

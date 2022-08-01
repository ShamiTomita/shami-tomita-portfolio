

import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Components.css';

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>
				<h3>ABOUT</h3>
				<h4>Born in Mexico City, Raised in Texas, Educated in NYC</h4>
				<p>*Graduated from NYU in 2017 with a Bachelor of Arts in Music and Game Design</p>
				<p>*Worked as a Line Cook for Xian Famous Foods and an Assistant Pastry Chef @ Ps. & Co</p>
				<p>*Completed the Flatiorn School's Software Engineering Bootcamp</p>
				<p></p>
				<img
					src='./cakes.jpg'
					alt='unsplash-img'
				/>
			</div>
		</section>
	);
};

export default About;

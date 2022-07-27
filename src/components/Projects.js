

import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Components.css';

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const projectRef = useNav('About');

	return (
		<section ref={projectRef} id='projectContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>Projects</h3>
				<p>This is the project section</p>
			</div>
		</section>
	);
};

export default About;



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
			<div className="project-header">
				<h1>My Projects:</h1>
			</div>
			<div class="projects">
				<div class="project1">
					<div>
						<h3>One Page News</h3>
						<img src="./OPN.png" alt="" />
					</div>
					<div>
						<p>A Single Page Application using plain JavaScript and a Ruby on Rails Backed</p>
					</div>
				</div>

				<div class="project2">
					<div>
						<h3>OBH Entertainment</h3>
						<img src="./OBH.png" alt=""/>
					</div>
					<div>
						<p>A Rails-Redux Entertainment Platform with a Rails Backend</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

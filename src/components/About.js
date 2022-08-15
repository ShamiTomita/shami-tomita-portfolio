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
			<div className="about center">
				<h3>Get To Know Me</h3>
				<div className="about blurb">
					
				</div>
			</div>

			<div className="about-photo">
				<div>
					<div className="container">
						<a href="https://cas.nyu.edu/" target="_blank" rel="noopener noreferrer">
							<div className="overlay">
							</div>
						</a>
						<img src="./nyu.png" alt="NYU Logo"/>
					</div>
					<div className="container">
						<img src="./psco.png" alt="Pure Sweets and Company Logo" />
						<a href="https://www.instagram.com/psandco/?hl=en" target="_blank" rel="noopener noreferrer">
							<div className="overlay">
							</div>
						</a>
					</div>
						<div className="container">
								<img src="./flatironschool.png" alt="The Flatiron School Logo" />
								<a href="https://flatironschool.com/courses/coding-bootcamp/" target="_blank" rel="noopener noreferrer">
									<div className="overlay">
									</div>
								</a>
						</div>
					<div className="container">
						<img src="./XFF.png" alt="Xian Famous Foods Logo"/>
						<a href="https://www.xianfoods.com/" target="_blank" rel="noopener noreferrer">
							<div className="overlay">
							</div>
						</a>
					</div>


				</div>
			</div>
		</section>
	);
};

export default About;

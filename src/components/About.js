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
				<div className="about blurb">
					<h3>ABOUT</h3>
					<h4>Born in Mexico City, Raised in Texas, Educated in NYC</h4>
					<p>*Graduated from NYU in 2017 with a Bachelor of Arts in Music and Game Design</p>
					<p>*Line Cook for Xian Famous Foods</p>
					<p>*Assistant Pastry Chef @ Pure Sweets & Co.</p>
					<p>*Graduate of the Flatiron School's Full Stack Software Engineering Program</p>
					<p></p>
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

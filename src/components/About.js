import React from 'react';
import {useState, useEffect} from 'react';
import AboutCard from "./AboutCard"
import {Button} from 'react-bootstrap'
import aboutData from "../local-json/about.json"
import { useNav } from '../customHooks/useNav';
import './Components.css';

const About = () => {
	const [abouts] = useState(aboutData)

	const aboutRef = useNav('About');

	const handleClick = (e) => {
		e.preventDefault()
		let target = e.currentTarget.id
		toggle(target)
	}
	const toggle = (target) => {
		debugger
		let yay = abouts.find(about => about.id === parseInt(target))
		console.log(aboutCards[target-1].style.display="flex")
	}
	const aboutButtons = abouts.map((about)=>(
			<>
				<Button  id={about.id} onClick={handleClick}>{about.name}</Button>
				<br/>
			</>
				))

	const aboutCards = abouts.map((about)=>(
		<div id={about.id} className="about-card" key={about.id}>
			<div className="about-text">
				<h2>{about.name}</h2>
				<h3>{about.desc}</h3>
				<h4>{about.desc2}</h4>
			</div>
			<div className="about-pics">
				<img src={about.img1} alt="" classname="about-img1"/>
				<img src={about.img2} alt="" classname="about-img2"/>
				<img src={about.img3} alt="" classname="about-img3"/>
			</div>
		</div>
	))

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div className="about center">
				<h3>Get To Know Me</h3>
				<div className="about-buttons">
					<ul>
						{aboutButtons}
					</ul>
				</div>
			</div>
			<div className="center">
				{aboutCards}
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

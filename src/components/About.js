import React from 'react';
import {useState, useEffect} from 'react';
import AboutCard from "./AboutCard"
import {Button} from 'react-bootstrap'
import aboutData from "../local-json/about.json"
import { useNav } from '../customHooks/useNav';
import Carousel from 'react-bootstrap/Carousel';
import './Components.css';

const About = () => {
	const [abouts] = useState(aboutData);
	const [current, setCurrent] = useState("about-me");
	const [markup, setMarkup] = useState("");
	const aboutRef = useNav('About');
	let toggle;
	useEffect(()=>{
		console.log(current)
		toggleView(current)
	}, [current])


	const handleClick = (e) => {
		e.preventDefault()
		setCurrent(e.target.id)

	}
	const toggleView = (target) => {
		//should not hit
		let yay = abouts.find(about => about.id === target)
		console.log("yay")
		toggleMarkUp(yay)
	}

	const toggleMarkUp = (about)=>{

		const list = about.desc2.map(item=>(
			<>
				<li>{item}</li>
				<br/>
			</>
				))

		let aboutMarkup = <div id={about.id} className="about-card" key={about.id}>
			<div className="about-text">
				<h2>{about.name}</h2>
				<h4>{about.desc}</h4>
				<ul>
					{list}
				</ul>
			</div>
			<div className="about-pics">
				<Carousel className="carousel">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={about.img1}
							alt="First slide"

						/>
						<Carousel.Caption className="car-cap">
							<h3>{about.img1Desc}</h3>
							<p>{about.img1d}</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={about.img2}
							alt="Second slide"
						/>

						<Carousel.Caption className="car-cap">
							<h3>{about.img2Desc}</h3>
							<p>{about.img2d}</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={about.img3}
							alt="Third slide"
						/>

						<Carousel.Caption className="car-cap">
							<h3>{about.img3Desc}</h3>
							<p>{about.img3d}</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>;
		setMarkup(aboutMarkup)
	}
	const aboutButtons = abouts.map((about)=>(
		<>
			<br/>
			<Button className="button" id={about.id} onClick={handleClick}>{about.name}</Button>
			<br/>
		</>
			))


	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div className="about-nav">
				<h3 className="header">Get To Know Me</h3>
				<div className="about-buttons">
					<ul>
						{aboutButtons}
					</ul>
				</div>
			</div>

			<div className="about-center">
				{markup}
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

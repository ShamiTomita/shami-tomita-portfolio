import React, {useState, useEffect} from 'react';
import { useNav } from '../customHooks/useNav';
import projectData from "../local-json/projects.json"
import ProjectCard from "./ProjectCard"
import './Components.css';

const About = () => {
	const [projects] = useState(projectData);


	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const projectRef = useNav('About');
	return (
		<section ref={projectRef} id='projectContainer'>
			<h1 className="project-header"> My Projects</h1>
			<ProjectCard projects={projects} />
		</section>
	);
};

export default About;

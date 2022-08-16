import {Card, Accordion} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
const ProjectCard = ({projects}) => {
  console.log(projects)
  const works = projects.map((project) =>(
    <Card key={project.id} style={{ width: '18rem' }} className="project-card">
      <Card.Img variant="top" src={project.img} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.language}</Card.Text>
        <Accordion>
          <Accordion.Item eventKey={project.id}>
            <Accordion.Header>Project Description</Accordion.Header>
            <Accordion.Body>
              <Card.Text className="project-description">
                {project.description}
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey={project.id}>
            <Accordion.Header>Features</Accordion.Header>
            <Accordion.Body>
              <Card.Text className="project-description">
                {project.description}
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#D4D4D4" className="project-github"/>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faVideo} className="project-github"/>
        </a>
        </Card.Body>
    </Card>
  ))

  return(
    <div className="projects">
      {works}
    </div>
  )
}
export default ProjectCard

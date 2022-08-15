const ProjectCard = ({projects}) => {
  console.log(projects)
  const works = projects.map((project) =>(

    <div key={project.id} className="row">
      <h1>{project.title}</h1>
      <p>{project.language}</p>
      <iframe src={project.demo} title={project.title} frameborder="0"></iframe>
    </div>
  ))

  return(
    <div>
      {works}
    </div>
  )
}
export default ProjectCard

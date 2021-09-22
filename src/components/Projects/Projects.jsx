import Grid from '@material-ui/core/Grid';
import "./Projects.scss";

export default function Projects(props) {
  return(
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      {
        props.projects.map((project)=>{
          return(
            <Grid className="project_container" container>
              <Grid item xs={11} sm={11} md={5} lg={4}>
                <img className="project_img" src={project.img}></img>
              </Grid>
              <Grid className="projet_content" item xs={12} sm={12} md={6} lg={7}>
                <h5 className="name">{project.name}</h5>
                <h6 className="name">Tech Stack: {project.tech}</h6>
                {
                  project.description.map((desc)=>{
                    return(
                      <p className="desc">• {desc}</p>
                    )
                  })
                }
                {
                  project.links.map((link)=>{
                    return(
                      <a href={link.link}  target="_blank">
                      <button className="github">
                        {link.type}
                      </button>
                      </a>
                    )
                  })
                }
              </Grid>
            </Grid>
          )
        })
      }
    </div>
  )
}
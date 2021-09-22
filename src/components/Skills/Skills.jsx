import Grid from '@material-ui/core/Grid';
import "./Skills.scss";

export default function Skills(props) {
  return(
    <div className="skills" id="skills">
      <h1 style={{fontSize:"2rem",marginLeft:"auto",marginRight:"auto"}}>SKILLS</h1>
      
      <Grid style={{
        margin:"10px",
        paddingRight:"20px"
      }} container>
        {props.skills.map((skill)=>{
          return(
            <Grid style={{
              padding:"10px"
            }} item xs={6} sm={4} md={3} ld={3}>
            <div className="skill_card">
              <h6 style={{
                margin:"10px"
              }}>{skill.name}</h6>
              <i style={{
                fontSize:"4rem"
              }} class={skill.icon_class}></i>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
import Grid from '@material-ui/core/Grid';
import "./Skills.scss";

export default function Skills(props) {
  return(
    <div className="skills" id="skills">
      <h1>SKILLS</h1>
      
      <Grid container>
        {props.skills.map((skill)=>{
          return(
            <Grid item xs={12} sm={6} md={4} ld={3}>
            <div className="skill_card">
              <h6>{skill.name}</h6>
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
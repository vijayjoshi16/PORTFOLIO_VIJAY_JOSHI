import React from 'react';
import './Education.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';


export default function Education(props){

    return(
        <div className="education" id="education">
            <h1 className="timeline_header">EDUCATION</h1>
            
                {props.education.map((institute,index)=>{
                    return(
                        <Grid container className="edu_grid">
                            <Grid className="left" item xs={5} sm={5} md={5} lg={5}>
                            {institute.name}
                            <br></br>
                            <br></br>
                            {institute.course}
                            </Grid>
                            <Grid className="center" item xs={2} sm={2} md={2} lg={2}>
                            <div className="school_icon">
                            <SchoolIcon style={{marginTop:"10px"}}></SchoolIcon>
                            </div>
                            
                            <br></br>
                            <div className="line"></div>
                            </Grid>
                            <Grid className="right" item xs={4} sm={4} md={4} lg={4}>
                            {institute.year}
                            <br></br>
                            <br></br>
                            Grade: {institute.grade}
                            </Grid>
                        </Grid>
                    )
                
                    
                })
            }
        </div>
    )
}
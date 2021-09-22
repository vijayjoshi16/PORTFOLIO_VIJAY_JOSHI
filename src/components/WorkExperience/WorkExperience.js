import './WorkExperience.scss';
import Grid from '@material-ui/core/Grid';

export default function WorkExperience(props){
    return(
        <div className="work_exp" id="workExperience">
            <h1 style={{fontSize:"2rem",marginLeft:"auto",marginRight:"auto"}}>WORK EXPERIENCE</h1>
            {
                props.workExperience.map((company)=>{
                    return(
                        <Grid className="company_container" container>
                            <Grid style={{
                                paddingRight:"20px"
                            }} item xs={12} sm={4} md={4} lg={4}>
                                <img className="comp_img" src={company.logo}></img>
                            </Grid>
                            <Grid className="company_content" item xs={12} sm={8} md={8} lg={8}>
                            <h5 >{company.name} - {company.position}</h5>
                            <h6 className="company_date">{company.date}</h6>
                            {
                                company.description.map((point)=>{
                                    return(
                                        <p className="company_desc">
                                        • {point}
                                        </p>
                                    )
                                })
                            }
                            <a href={company.work_link}  target="_blank">
                                <button
                                className="github">
                                    GITHUB WORK LINK
                                </button>
                            </a>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </div>
    )
}
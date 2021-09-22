import './Achievements.scss';
import Grid from '@material-ui/core/Grid';
import EmojiEvents from '@material-ui/icons/EmojiEvents';

export default function Achievements(props){
    return(
        <div className="achievements" id="achievements">
            <h1>ACHIEVEMENTS</h1>
            <Grid container>
                <Grid style={{width:"70%",height:"70%"}} item xs={12} sm={12} md={5} lg={4}>
                   <EmojiEvents style={{
                       color:"yellow",
                       width:"80%",
                       height:"80%",
                   }}></EmojiEvents> 
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                    {
                        props.achievements.map((data)=>{
                            return(
                                <p className="achievement_content">• {data}</p>
                            )
                        })
                    } 
                </Grid>
            </Grid>
        </div>
    )
}
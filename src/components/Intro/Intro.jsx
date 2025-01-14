import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 400,
      backSpeed:60,
      strings: ["Full Stack Developer","MERN Stack Web Developer", "Android Developer","ML Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
    <Grid container>
      <Grid style={{textAlign:"center"}} item xs={12} sm={6} md={6} lg={6}>
        <div className="imgContainer">
          <img src="assets/vijay.png" alt="" />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
          <h2 className="intro_text">Hello World, I'm </h2>
          <h1 className="intro_text">Vijay Joshi</h1>
          <h3 className="intro_text">
            I'm a <span  style={{color:"#0047AB"}} ref={textRef}></span>
          </h3>
          </Grid>
    </Grid>
    <a style={{marginLeft:"45%",marginRight:"45%",paddingTop:"500px"}} href="#education">
      <img style={{width:"50px",height:"50px"}} src="assets/down.png" alt="" />
    </a>
      {/* <div className="left">
        
      </div>
      <div className="right">
        
        <a href="#education">
          <img src="assets/down.png" alt="" />
        </a>
      </div> */}
    </div>
  );
}
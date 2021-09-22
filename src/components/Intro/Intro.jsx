import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Button } from "@material-ui/core";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 400,
      backSpeed:60,
      strings: ["MERN Stack Web Developer", "Competitive Programmer", "Android Developer","ML Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/vijay.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World, I'm </h2>
          <h1>Vijay Joshi</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
          
          
        </div>
        <a href="#education">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
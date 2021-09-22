import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Education from './components/Education/Education';
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import { education } from "./data";
import {skills} from './data';
import {workExperience} from './data';
import {projects} from './data';
import {achievements} from './data';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Education education={education}/>
       <Skills skills={skills}/>
       <WorkExperience workExperience={workExperience}/>
       <Projects projects={projects}/>
       <Achievements achievements={achievements}/>
       <Contact/>
       <Footer />
     </div>
    </div>
  );
}

export default App;
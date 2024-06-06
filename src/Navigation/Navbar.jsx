import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutme from "../My Info/Aboutme";
import Profesummary from "../My Prof Summary/Profesummary";
import Experience from "../My Experience/Profexp";
// import Myskills from "../My Skills/Myskills";
import Myskills from '../My Skills/Myskills'
import Education from "../Education/Education";
import Projects from "../My Project Exp/Projectexp";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        <div>
          {/* <button className="menu-button" >
            ☰
          </button> */}
          <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" >My Info</Link>
              </li>
              <li>
                <Link to="/Profsummary" >Professional Summary</Link>
              </li>
              <li>
                <Link to="/Profexp" >Professional Experience</Link>
              </li>
              <li>
                <Link to="/myskills" >Technical Skills</Link>
              </li>
              <li>
                <Link to="/graduation" >Education</Link>
              </li>
              <li>
                <Link to="/projects" >Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/Profsummary" element={<Profesummary />} />
          <Route path="/Profexp" element={<Experience />} />
          <Route path="/myskills" element={<Myskills />} />
          <Route path="/graduation" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

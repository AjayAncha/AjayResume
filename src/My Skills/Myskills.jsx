import React from "react";
import "./Myskills.css";

export default function Myskills() {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skill-section">
        <h3>Web Development</h3>
        <p>HTML, CSS, JavaScript, Freemarker</p>
      </div>
      <div className="skill-section">
        <h3>Frameworks</h3>
        <p>React, Angular, Bootstrap</p>
      </div>
      <div className="skill-section">
        <h3>Tools and Technologies</h3>
        <p>Git, Webpack</p>
      </div>
      <div className="skill-section">
        <h3>Basic Knowledge:</h3>
        <p>MySQL, Postman</p>
      </div>
    </div>
  );
}

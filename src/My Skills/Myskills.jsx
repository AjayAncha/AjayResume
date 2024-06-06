import React, { useState, useEffect } from "react";
import "./Myskills.css";
import  skillsData  from "./Myskills.js";

export default function Myskills() {
  const [skills, setSkills] = useState([]);
 console.log(skillsData?.skills)
  useEffect(() => {
    setSkills(skillsData?.skills); // Set the skills data from the imported module
  }, []);
     console.log(skills)
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      {skills.map((skillSection, index) => (
        <div key={index} className="skill-section">
          <h3>{skillSection.category}</h3>
          <p>{skillSection.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

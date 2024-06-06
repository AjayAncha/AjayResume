import React from "react";
import "./Profexp.css"; // Importing a CSS file for styling

export default function Profexp() {
  return (
    <div className="profexp-container">
      <div className="profexp-header">
        <h2>Professional Experience</h2>
      </div>
      <div className="profexp-content">
        <div className="work-experience">
          <b>Total Work Experience:</b> 5y 4mo
        </div>
        <div className="current-position">
          <b>Current Position:</b>
          <p>
            Currently employed as a Senior Software Engineer at iTalent Digital in
            Hyderabad since June 2021.
          </p>
        </div>
        <div className="previous-experience">
          <b>Previous Work Experience:</b>
          <ul>
            <li>
              <p>
                Worked as a Software Engineer at Sanrock Automation from October
                2019 until May 2021.
              </p>
            </li>
            <li>
              <p>
                Held the position of Associate Software Engineer at Piersoft
                Technologies from February 2019 to October 2019.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Aboutme.css";

export default function Aboutme() {
  return (
    <div className="Myinfo">
      <table className="data-table">
        <tbody>
          <tr>
            <th>Name:</th>
            <td>Ajay</td>
          </tr>
          <tr>
            <th>Designation:</th>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>anchaajay@gmail.com</td>
          </tr>
          <tr>
            <th>Contact No:</th>
            <td>8297911233</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

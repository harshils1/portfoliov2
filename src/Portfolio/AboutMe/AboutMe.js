import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="aboutme">
            <h2>Who Am I?</h2>
            <p>Some text..</p>
          </div>
          <div className="vl1">
          </div>
          <div className="aboutme">
            <h2>Experience</h2>
            <p>Some text..</p>
          </div>
          <div className="vl2">
          </div>
          <div className="aboutme">
            <h2>Awards</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="aboutme">
            <h2>Who Am I?</h2>
            <p className="paragraph1">
              Hey everyone, this is Harshil! I am currently a first-year
              computer engineering student at University of Waterloo, presently
              in my co-op term interning as a Junior Data Engineer at
              Infrastructure Canada! I am passionate about programming, music,
              napping, and playing basketball.
            </p>
          </div>
          <div className="vl1"></div>
          <div className="aboutme">
            <h2>Experience</h2>
            <p className="paragraph">
              Junior Data Engineer | 2022
              <br></br>
              <br></br>
              <p className="smallp">
                As a junior data engineer, I am leveraging an Oracle Stack to
                develop the enterprise data warehouse, ETL pipelines, relational
                database models, and more!
              </p>
              Mobile Application Developer | 2021
              <br></br>
              <br></br>
              <p className="smallp">
                As a mobile application developer, I used React Native to help
                develop a cross-platform mobile application. Additionally, I
                extracted data from the company's REST API in JSON format to
                increase the versatility of the application.
              </p>
            </p>
          </div>
          <div className="vl2"></div>
          <div className="aboutme">
            <h2>Awards</h2>
            <p className="paragraph">
              $1500 Ministry of Education Grant 
              <br></br>
              <br></br>
              Capt. Philip Chao Athletic Award
              <br></br> 
              <br></br>
              Duke of Edinburgh (Silver) 
              <br></br>
              <br></br>
              Certificate of Distinction (Fermat) 
              <br></br>
              <br></br>
              5 years Service Medal in Cadets
              <br></br>
              <br></br>
              Certificate of Distinction (Euclid) 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

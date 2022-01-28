import React, {useState} from "react";
import "./AboutMe.css";

export default function AboutMe() {

  const [version, setVersion] = useState(true);
  const [version2, setVersion2] = useState(true);
  const [version3, setVersion3] = useState(true);

  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="aboutme">
            <div className={version ? "square1" : "square-none"} onClick={() => setVersion(false)}>
              <h2 className='headers'>Who Am I?</h2>
              </div>
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
            <div className={version2 ? "square2" : "square-none"} onClick={() => setVersion2(false)}>
            <h2 className="headers">Experience</h2>
            </div>
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
            <div className={version3 ? "square3" : "square-none"} onClick={() => setVersion3(false)}>
            <h2 className="headers">Awards</h2>
            </div>
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
              <br></br>5 years Service Medal in Cadets
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

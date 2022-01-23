import React, {useState} from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {

  const [resume, setResume] = useState('Resumé');

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.instagram.com/__harshilshah/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshils1/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/harshils1">
              <i className="fa fa-github"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              hey, i'm a
            </span>
          </div>
          <div className='profile-details-role'>
              <span className="primary-text">
                <h1>
                    <Typical
                    loop ={Infinity}
                    steps={[
                        "tech enthusiast", 1000,
                        "software developer", 1000,
                        "designer", 1000,                    
                      ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                  and this is a place where you will get to know more about me!
                </span>
              </span>
          </div>
          <div className="profile-options">
            <a href="resume.pdf" download="resume.pdf">  
                    <button className='btn highlighted-btn' onClick={() => setResume('Downloading!')}>{resume}</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
    
  );
}

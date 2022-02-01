import React, {useState} from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {

  const [resume, setResume] = useState('resumé');
  const[pic, setPic] = useState(false);

  const changeResume = () => {
    resume = setResume('coming soon...');
    const timer = setTimeout(changeDownloading, 2000);
  }

  const changeDownloading = () => {
    resume = setResume('resumé');
  }




  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">  
            <div className="colz-icon">
            <a href="https://www.instagram.com/__harshilshah/?hl=en" target="_blank">
              <i className="fa fa-instagram"></i>
            </a> 
            <a href="https://www.linkedin.com/in/harshils1/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/harshils1" target="_blank">
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
                    loop = {Infinity}
                    steps={[
                        "tech enthusiast", 2000,
                        "software developer", 2000,
                        "designer", 2000,                    
                      ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                  and this is a place where you will get to know more about me!
                </span>
              </span>
          </div>
          <div className="profile-options">
            <a /*href="resume.pdf" download="resume.pdf"*/ target="_blank">  
                    <button className='btn highlighted-btn' onClick={changeResume}>{resume}</button>
            </a>
          </div>
        </div>
        <div className='profile-picture' onClick={() => setPic(!pic)} >
          <div className={pic ? 'pic2' : 'profile-picture-background'}></div>
        </div>
      </div>
    </div>
    
  );
}

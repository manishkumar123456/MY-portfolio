import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon'>
                        {/* <a href='https://medium.com/@rwsoeriawinata'>
                            <i className="fa fa-medium"></i>
                        </a> */}
                        <a href='https://www.linkedin.com/in/raditiasoeriawinata-25434842/'>
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href=' https://github.com/manishkumar123456?tab=repositories'>
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href='https://x.com/ManishK61149403?t=XfDB0A7vYjiBxQ7OFQW6SA&s=09'>
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Manish kumar</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Devloper",
                                    1000,
                                    "Mern stack Devloper 💻",
                                    1000,
                                    "Frontend Devloper",
                                    1000,
                                    "Enthusiastic Back-End Tech.",
                                    1000,
                                    "Full stack Devloper",
                                    1000,
                                   
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Deepening New Horizon with Data and Technology.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Hire Me </button>
                        <a href='My_CV_2_0.pdf' download='My Portfolio.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>            
        </div>
    );
}

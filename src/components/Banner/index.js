import React from 'react';

import Profile from './../../assets/profile-pic.png'
import './style.scss'

function Banner(props) {
    return (
        <section className="banner-cont" id="home">
            <div className='main-cont'>
                <div className="sub-heading">
                    Hi, I'm
                </div>
                <div className="clip-text" id="top-image"><h1>ASHU SHARMA</h1></div>
                <div className="sub-heading">
                    Full Stack Developer And Web Enthusiast
                </div>
            </div>
            <div className="social-cont">
                <div className="social-container">
                    <a href="https://github.com/A-k-sharma" className="social-connect"
                       target="blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="social-container">
                    <a href="https://www.linkedin.com/in/a-k-sharma/" className="social-connect"
                       target="blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="social-container">
                    <a href="https://twitter.com/a_k_sharma123" className="social-connect"
                       target="blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Banner;
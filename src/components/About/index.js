import React from 'react';
import {Row, Col} from "antd";
import './style.scss'

function About(props) {
    return (
        <section  id="about" className="abt-cont">
            <div className="main-heading">
                <h3>About Me</h3>
                <p className="sub-heading">
                    My Introduction
                </p>
            </div>
            <div className="abt-text-cont">
                <div className="abt-text">
                    Hi I'm Ashu. a <span className="under-line">Full-Stack Developer <span className="under"></span></span> specialised in frontend and backend development for complex scalable web apps.
                    I like to improve user experience, create smart user interfaces, developing rich web applications scalability, performance and efficiency.
                    Fond of <span className="under-line">Minimalistic <span className="under"></span></span>  UI/UX.
                </div>
                <div className="abt-text">
                    Currently working as a Full Stack Developer at To The New.
                    Primarily interested in JavaScript frontend  and  backend spectrum.
                    Working on interesting projects with positive people.
                </div>


            </div>
        </section>
    );
}

export default About;
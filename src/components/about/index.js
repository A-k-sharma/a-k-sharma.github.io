import React from 'react';
import {Row, Col} from "antd";
import Profile from './../../assets/profile-pic.png';
import './style.scss';

function About(props) {
    return (
        <div className="abt-container">
            <Row>
                <Col>
                    <h2 className={"clip-text"}>About Me</h2>
                    <div className='main-description desc'>
                        I'm Ashu Sharma, a 24-year-old Full Stack developer with an experience of around 3 years, I like to improve user experience, create smart user interfaces and developing rich web applications and managing & optimizing backend infrastructure including deployment, scalability, performance and efficiency.
                        Fond of Minimalistic UI/UX.
                    </div>
                    <div className="secondary-description desc">
                        Currently working as a Full Stack Developer at To The New.
                        Primarily interested in JavaScript frontend and backend spectrum.
                        Working on interesting projects with positive people.
                    </div>
                </Col>
                {/*<Col span={12}>*/}
                {/*    <div className="profile-pic-container">*/}
                {/*        <img src={Profile} alt="ashu-sharma"/>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>
        </div>
    );
}

export default About;
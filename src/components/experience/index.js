import React from 'react';
import './style.scss';

function Experience(props) {
    return (
        <div className="experience-container">
            <div className="steps-progress">
                <ul className="steps-list">
                    <li className="steps-item">
                        <h3 className="head">Informatics Engineering</h3>
                        <div className="location">Indonesia - University</div>
                        <div className="periode"><i className="fas fa-calendar-alt"></i> 2016-2021</div>
                    </li>
                    <li className="steps-item">
                        <h3 className="head">Griya Media Nusantara</h3>
                        <div className="location">Indonesia - Company</div>
                        <div className="periode"><i className="fas fa-calendar-alt"></i> 2016-2021</div>
                    </li>
                    <li className="steps-item">
                        <h3 className="head">Hakku Nam</h3>
                        <div className="location">Indonesia - Company</div>
                        <div className="periode"><i className="fas fa-calendar-alt"></i> 2016-2021</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
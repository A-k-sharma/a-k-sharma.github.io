import React, {useState} from 'react';
import { Tabs, Timeline } from 'antd';

import './style.scss'

const { TabPane } = Tabs;

function Experience(props) {
    const [activeTab, setActiveTab] = useState("1")
    return (
        <section id="experience" className="exp-cont">
            <div className="main-heading">
                <h3>Qualification</h3>
                <p className="sub-heading">
                    My Educational Qualification & Work Experience
                </p>
            </div>
            <Tabs defaultActiveKey="1" onChange={(key)=>setActiveTab(key)}>
                <TabPane tab="Education" key="1">
                    <Timeline mode="alternate">
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    BTech In Computer Science
                                </div>
                                <div className="clg-title">
                                    Noida Institute Of Engineering and Technology, Greater Noida
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    2015-2019
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    Senior Secondary School
                                </div>
                                <div className="clg-title">
                                    Summer Fields School, Gurgaon
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    2013-2015
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    Secondary School
                                </div>
                                <div className="clg-title">
                                    Ascent Public School, Gurgaon
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    2003-2013
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </TabPane>
                <TabPane tab="Experience" key="2">
                    <Timeline mode="alternate">
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    Software Engineer
                                </div>
                                <div className="clg-title">
                                    To The New, Noida
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    2019 - Till Now
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    Trainee
                                </div>
                                <div className="clg-title">
                                    To The New, Noida
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    Feb, 2019 - Aug,2019
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#ff2175">
                            <div className="experience-card">
                                <div className="degree-title">
                                    Intern
                                </div>
                                <div className="clg-title">
                                    Varya Vega Pvt. Ltd., New Delhi
                                </div>
                                <div className="passout-year">
                                    <i className="fas fa-solid fa-calendar"></i>
                                    June, 2018 - Jul, 2018
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </TabPane>
            </Tabs>
        </section>
    );
}

export default Experience;
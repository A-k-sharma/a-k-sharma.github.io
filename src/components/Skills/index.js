import React from 'react';
import { Row, Col, Progress } from 'antd';
import ReactIcon from '../../assets/react.svg';
import HtmlIcon from '../../assets/html-5.svg';
import CssIcon from '../../assets/css3.svg';
import GitIcon from '../../assets/git.svg';
import NodeIcon from '../../assets/nodejs.svg';
import JsIcon from '../../assets/javascript.svg';
import ReduxIcon from '../../assets/redux.svg';
import ExpressIcon from '../../assets/express-js.svg';
import SassIcon from '../../assets/sass.svg';
import MongoIcon from '../../assets/mongodb.svg';


import './style.scss';

let skillsObj = [
    {
        name: "HTML",
        id: 1,
        icon: HtmlIcon,
        percentage: 80
    },
    {
        name: "CSS",
        id: 2,
        icon: CssIcon,
        percentage: 80
    },
    {
        name: "Javascript",
        id: 3,
        icon: JsIcon,
        percentage: 85
    },
    {
        name: "React.JS",
        id: 4,
        icon: ReactIcon,
        percentage: 90
    },
    {
        name: "Redux",
        id: 5,
        icon: ReduxIcon,
        percentage: 80
    },
    {
        name: "Node.JS",
        id: 6,
        icon: NodeIcon,
        percentage: 65
    },
    {
        name: "MongoDB",
        id: 7,
        icon: MongoIcon,
        percentage: 65
    },
    {
        name: "Express",
        id: 8,
        icon: ExpressIcon,
        percentage: 65
    },
    {
        name: "SASS/SCSS",
        id: 9,
        icon: SassIcon,
        percentage: 80
    },
    // {
    //     name: "Agile",
    //     id: 10,
    //     // icon: ,
    //     percentage: 90
    // },
    {
        name: "Git/Github",
        id: 11,
        icon: GitIcon,
        percentage: 90
    },
    // {
    //     name: "Jira",
    //     id: 12,
    //     icon: ,
    //     percentage: 90
    // },
    // {
    //     name: "Next.JS",
    //     id: 13,
    //     // icon: ,
    //     percentage: 90
    // },
]

function Skills(props) {
    return (
        <section className="skill-cont" id="skill">
            <div className="main-heading">
                <h3>Skills</h3>
                <p className="sub-heading">
                    Tools and Technologies I have Worked With
                </p>
            </div>
            <div className="skill-grid-cont">
                <Row gutter={[18, 25]}>
                    {
                        skillsObj.map((item,i)=>{
                            return <Col className="gutter-row" span={4} xs={24} xl={6}>
                                <div key={item.id} className='skill-card'>
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#ff2175',
                                            '100%': '#ff2175',
                                        }}
                                        percent={item.percentage}
                                        format={() =><div className="card-item">
                                            {
                                                item.icon && <div className="icon">
                                                    <img src={item.icon} alt={item.name}/>
                                                </div>
                                            }
                                            <span className="title">{item.name}</span>
                                        </div>}
                                    />
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        </section>
    );
}

export default Skills;  
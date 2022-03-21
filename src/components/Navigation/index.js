import React, {useState} from 'react';
import { Drawer, Button, Switch } from 'antd';

import './style.scss'
function NavBar(props) {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <nav className="nav-bar-cont">
            <div className="logo">
                <span>Ashu</span>
            </div>
            <div className="menu-bar">
                <div className="menu-item" onClick={(e)=> {
                    e.preventDefault();
                    window.location.replace("/#home")
                }}>
                    <span className="title">Home</span>
                </div>
                <div className="menu-item" onClick={(e)=> {
                    e.preventDefault();
                    window.location.replace("/#about")
                }}>
                    <span className="title">About Me</span>
                </div>
                <div className="menu-item" onClick={(e)=> {
                    e.preventDefault();
                    window.location.replace("/#skill")
                }}>
                    <span className="title">Skills</span>
                </div>
                <div className="menu-item" onClick={(e)=> {
                    e.preventDefault();
                    window.location.replace("/#experience")
                }}>
                    <span className="title">Experience</span>
                </div>
                {/*<div className="menu-item">*/}
                {/*    <span className="title">Portfolio</span>*/}
                {/*</div>*/}
                {/*<div className="menu-item">*/}
                {/*    <span className="title">Blogs</span>*/}
                {/*</div>*/}
                <div className="menu-item" onClick={(e)=> {
                    e.preventDefault();
                    window.location.replace("/#contact")
                }}>
                    <span className="title">Contact</span>
                </div>
                <div className="menu-item">
                    <Switch
                        onChange={()=>props.setDarkMode(prev=>!prev)}
                        checkedChildren={
                            <i className="fas fa-solid fa-moon"></i>
                        }
                        unCheckedChildren={
                            <i className="fas fa-solid fa-sun"></i>
                        }
                        defaultChecked
                    />
                </div>
                <Button className="barsMenu" type="primary" onClick={()=>setShowDrawer(prev=>!prev)}>
                    <i className="fas fa-solid fa-bars"></i>
                </Button>
                <Drawer
                    placement="left"
                    closable={false}
                    className={props.darkMode? "dark-mode" : "light-mode"}
                    onClose={()=>setShowDrawer(prev=>!prev)}
                    visible={showDrawer}
                    width={100}
                    bodyStyle={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div className="menu-item">
                        <span className="icon">
                            <i className="fas fa-home mobile-icon"></i>
                        </span>
                        <span className="title" onClick={(e)=> {
                                e.preventDefault();
                                window.location.replace("/#home")
                            }}
                        >Home</span>
                    </div>
                    <div className="menu-item">
                        <span className="icon">
                           <i className="fas fa-solid fa-user-tie"></i>
                        </span>
                        <span className="title" onClick={(e)=> {
                                e.preventDefault();
                                window.location.replace("/#about")
                            }}
                        >About Me</span>
                    </div>
                    <div className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-network-wired"></i>
                        </span>
                        <span className="title" onClick={(e)=> {
                                e.preventDefault();
                                window.location.replace("/#experience")
                            }}
                        >Experience</span>
                    </div>
                    <div className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="title" onClick={(e)=> {
                                e.preventDefault();
                                window.location.replace("/#skill")
                            }}
                        >Skills</span>
                    </div>
                    {/*<div className="menu-item">*/}
                    {/*    <span className="icon">*/}
                    {/*        <i className="fas fa-solid fa-briefcase"></i>*/}
                    {/*    </span>*/}
                    {/*    <span className="title">Portfolio</span>*/}
                    {/*</div>*/}
                    {/*<div className="menu-item">*/}
                    {/*    <span className="icon">*/}
                    {/*        <i className="fas fa-solid fa-newspaper"></i>*/}
                    {/*    </span>*/}
                    {/*    <span className="title">Blogs</span>*/}
                    {/*</div>*/}
                    <div className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-phone"></i>
                        </span>
                        <span className="title" onClick={(e)=> {
                                e.preventDefault();
                                window.location.replace("/#contact")
                            }}
                        >Contact</span>
                    </div>
                    <div className="menu-item">
                        <Switch
                            onChange={()=>props.setDarkMode(prev=>!prev)}
                            checkedChildren={
                                <i className="fas fa-solid fa-sun"></i>
                            }
                            unCheckedChildren={
                                <i className="fas fa-solid fa-moon"></i>
                            }
                            defaultChecked
                        />
                    </div>
                </Drawer>
            </div>
        </nav>
    );
}

export default NavBar;
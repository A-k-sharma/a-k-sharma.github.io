import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";
import {CaretRightOutlined} from "@ant-design/icons"

function Menu(props) {
    return (
        <div className="navigation">
            <ul>
                <li className="list">
                    <NavLink exact to={'/'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-home mobile-icon"></i>
                        </span>
                        <span className="title">Home</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/about'} activeClassName="active" className="menu-item">
                        <span className="icon">
                           <i className="fas fa-solid fa-user-tie"></i>
                        </span>
                        <span className="title">About Me</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/experience'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-network-wired"></i>
                        </span>
                        <span className="title">Experience</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/skill'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="title">Skills</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/portfolio'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-briefcase"></i>
                        </span>
                        <span className="title">Portfolio</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/blogs'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-newspaper"></i>
                        </span>
                        <span className="title">Blogs</span>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink exact to={'/contact'} activeClassName="active" className="menu-item">
                        <span className="icon">
                            <i className="fas fa-solid fa-phone"></i>
                        </span>
                        <span className="title">Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
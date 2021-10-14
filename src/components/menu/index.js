import React from 'react';
// import './style.css';
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <div className="navbar-custom">
            <div className="menu">
                <div className="header">
                    <i className="fab fa-earlybirds"></i>
                </div>
                <div className="navigation-menu">
                    <div className="menu-item">
                        <NavLink exact to={'/'} activeClassName="selected">
                            <i className="fas fa-home"></i>
                            <span className="menu-text">Home</span>
                        </NavLink>
                    </div>

                    <div className="menu-item">
                        <NavLink to={'/skill'} activeClassName="selected">
                            <i className="fab fa-black-tie"></i>
                            <span className="menu-text">Profile</span>
                        </NavLink>
                    </div>

                    <div className="menu-item">
                        <NavLink to={'/blogs'}>
                            <i className="fas fa-briefcase"></i>
                            <span className="menu-text">Work</span>
                        </NavLink>
                    </div>

                </div>
                <div className="footer">
                    <div className="menu-item">
                    </div>

                    <div className="menu-item">
                        <a href="https://instagram.com/mr_ashish___" className="menu-item" style={{"color":"#E26961"}}
                           target="blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    <div className="menu-item">
                        <a href="https://github.com/a-k-sharma" className="menu-item" style={{"color":"#CFCFCF"}}
                           target="blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
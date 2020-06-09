import React, { Component } from 'react'
import { Link } from 'react-scroll';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-container">
                <Link className="nav-item"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    Home
                </Link>
                <Link className="nav-item2"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    Skills
                </Link>
                <Link className="nav-item"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    Projects
                </Link>
                <Link className="nav-item2"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    Contact
                </Link>
            </div>
        )
    }
}
import React, { Component } from 'react'
import DropDown from './dropdown';
import Logo from '../siteLogo.svg';
import { Link } from 'react-router-dom';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    
    render() {
        return (
            <div className="nav">
                
                    <img className="logo" src={Logo} alt="Site Logo" />
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/projects" className="nav-item">Projects</Link>
                    <Link to="/contact" className="nav-item">Contact</Link>
                
            </div>
        )
    }
}
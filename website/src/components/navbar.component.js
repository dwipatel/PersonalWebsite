import React, { Component } from 'react'
import DropDown from './dropdown';
import Logo from '../siteLogo.svg';
import { Link } from 'react-router-dom';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    
    render() {
        return (
            <div className="nav-container">
                
                <button className="nav-item">Home</button>
                <button className="nav-item">Skills</button>
                <button className="nav-item">Projects</button>
                <button className="nav-item">Contact</button>

            </div>
        )
    }
}
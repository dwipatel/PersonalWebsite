import React, { Component } from 'react'
import DropDown from './dropdown';
import Logo from '../method-draw-image.svg';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    
    render() {
        return (
            <div className="nav">
                
                    <img className="logo" src={Logo} alt="Site Logo" />
                    <button className="nav-item">Home</button>
                    <button className="nav-item">Projects</button>
                    <button className="nav-item">Acheivments</button>
                    <button className="nav-item">About</button>
                
            </div>
        )
    }
}
import React, { Component } from 'react'
import DropDown from './dropdown';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    
    render() {
        return (
            <div className="nav">
                <ul>
                    <p className="nav-item">Name</p>
                    <p className="nav-item">Email</p>
                    <p className="nav-item">Number</p>
                    <DropDown title="Achievements"/>
                    <p className="nav-item">About</p>
                </ul>
            </div>
        )
    }
}
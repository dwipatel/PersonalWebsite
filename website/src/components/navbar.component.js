import React, { Component } from 'react'
import DropDown from './dropdown';

import '../styles/navAndDropdown.css';

export default class NavBar extends Component {
    
    render() {
        return (
            <div className="nav">
                <ul>
                    <p className="info">Name</p>
                    <p className="info2">Email</p>
                    <button className="nav-item">Projects</button>
                    <DropDown title="Achievements"/>
                    <button className="nav-item">About</button>
                </ul>
            </div>
        )
    }
}
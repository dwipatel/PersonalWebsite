import React, { Component } from 'react'
import GitHubLogo from '../github-logo.png'

import '../styles/project.css';

export default class Project extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="proj-div">
                <div className="proj-text">
                    <h3 className="proj-title">{this.props.name}</h3>
                    <p className="proj-des">{this.props.description}</p>
                </div>
                <div className="buttonDiv">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="button"><img width="50%" height="auto" src={GitHubLogo} alt="Go to Github"/></a>
                </div>
                
            </div>
        )
    }
}
import React, { Component } from 'react'

import '../styles/project.css';

export default class ProjectNoGitHub extends Component {
    constructor(props) {
        super(props)
    }
    
    render(props) {
        return (
            <div className="proj-container">
                <p className="proj-name"> {this.props.name} </p>
                <p className="proj-year"> {this.props.year} </p>
                <div className="proj-desc"> {this.props.description} </div>
            </div>
        )
    }
}
import React, { Component } from 'react'


import '../styles/project.css';

export default class ProjectNoGitHub extends Component {
    constructor(props) {
        super(props)
    }
    
    render(props) {
        return (
            <div className="proj-div">
                <div className="proj-text">
                    <h3 className="proj-title">{this.props.name}</h3>
                    <p className="proj-des">{this.props.description}</p>
                </div>                
            </div>
        )
    }
}
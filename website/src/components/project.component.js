import React, { Component } from 'react'

import '../styles/project.css';

export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    
    render(props) {
        return (
            <div className="a">
                <div className="proj-div">
                    <h3 className="proj-title">{this.props.name}</h3>
                    <p className="proj-des">{this.props.description}</p>
                </div>
                <button className="but">Click</button>
            </div>
            
        )
    }
}
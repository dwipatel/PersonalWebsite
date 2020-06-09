import React, { Component } from 'react'
import GitHubLogo from '../github-logo.png'

import '../styles/project.css';

export default class Project extends Component {    
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }
        this.showDescription = this.showDescription.bind(this);
    } 
    
    showDescription() {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    render() {
        
        return (
            <div className="proj-container">
                <p className="proj-name"> {this.props.name} </p>
                <p className="proj-year"> {this.props.year} </p>
                <button className="expand-desc" onClick={this.showDescription}> GitHub » </button>
                <div className="proj-desc"> {this.props.description} </div>
            </div>
        )
    }
}
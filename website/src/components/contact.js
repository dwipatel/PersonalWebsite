import React, { Component } from 'react'
import GitHubLogo from '../assets/github-logo.png';
import LinkdinLogo from '../assets/Linkedin-Logo.png';

import '../styles/contact.css';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <a href="https://github.com/dwipatel" target="_blank"><img src={GitHubLogo} alt="GitHub" className="logo-pic"/></a>
                <a href="https://ca.linkedin.com/in/dwip" target="_blank"><img src={LinkdinLogo} alt="LinkdIn Contact" className="logo-pic"/></a>
            </div>
        )
    }
}
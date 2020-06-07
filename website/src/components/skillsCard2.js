import React, { Component } from 'react';
import TechJot from '../assets/tech-jot2.png';

import '../styles/skillsCard.css';

export default class SkillsCard2 extends Component {
    render() {
        return(
            <div>
                <div className="lang-container">
                    <img className="lang-jot" src={TechJot} alt="language jot"/>
                    <p className="lang-item"> {this.props.tech} </p>
                </div>
            </div>
        )
    }
}
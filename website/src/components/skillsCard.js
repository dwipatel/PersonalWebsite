import React, { Component } from 'react';
import LangJot from '../assets/lang-jot2.png';

import '../styles/skillsCard.css';

export default class SkillsCard extends Component {
    render() {
        return(
            <div>
                <div className="lang-container">
                    <img className="lang-jot" src={LangJot} alt="language jot"/>
                    <p className="lang-item"> {this.props.lang} </p>
                </div>
            </div>
        )
    }
}
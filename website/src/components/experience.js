import React, { Component } from 'react';

import '../styles/experience.css'

export default class SkillsCard extends Component {
    render() {
        return(
            <div className="main">
                <p className="pos-title"> { this.props.title } </p>
                <p className="pos-date"> { this.props.date } </p>
                <p className="pos-info"> { this.props.info } </p>
            </div>
        )
    }
}
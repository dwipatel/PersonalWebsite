import React, { Component } from 'react';

import '../styles/skillsCard.css';

export default class SkillsCard extends Component {
    render() {
        return(
            <div>
                <div className="skill-title">
                    <p>Skills</p>
                </div>
                <div className="skills-card">
                    <div className="big-div">
                        <p className="item-title">Languages</p>
                        <p className="item">Java</p>
                        <p className="item">Python</p>
                        <p className="item">HTML</p>
                        <p className="item">CSS</p>
                        <p className="item">C</p>
                        <p className="item">JavaScript</p>
                        <p className="item">Verilog</p>
                    </div>

                    <div className="big-div">
                        <p className="item-title">Technologies</p>
                        <p className="item">React.js</p>
                        <p className="item">Node.js</p>
                        <p className="item">Express.js</p>
                        <p className="item">MongoDB</p>
                        <p className="item">AutoCAD</p>
                        <p className="item">Git</p>
                        <p className="item">React Native</p>
                    </div>
                </div>
            </div>
            
        )
    }
}
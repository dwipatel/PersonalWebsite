import React, { Component } from 'react'

import '../styles/skillsCard.css';

export default class SkillsCard extends Component {
    render() {
        return(
            <div className="skills-card">
                
                <div className="language">
                    <h3 className="language-title">Languages</h3>
                    <p className="language-item">Java</p>
                    <p className="language-item">Python</p>
                    <p className="language-item">HTML/CSS</p>
                    <p className="language-item">C</p>
                    <p className="language-item">JavaScript</p>
                    <p className="language-item">Verilog</p>
                </div>

                <div className="technology">
                    <h3 className="technology-title">Technologies</h3>
                    <p className="technology-item">React.js</p>
                    <p className="technology-item">Node.js</p>
                    <p className="technology-item">Express.js</p>
                    <p className="technology-item">MongoDB</p>
                    <p className="technology-item">AutoCAD</p>
                    <p className="technology-item">Git</p>
                    <p className="technology-item">React Native</p>
                </div>


                {/* <ul className="language">
                    <h3 className="language-title">Languages</h3>
                    <li className="language-item">Java</li>
                    <li className="language-item">Python</li>
                    <li className="language-item">HTML/CSS</li>
                    <li className="language-item">C</li>
                    <li className="language-item">JavaScript</li>
                    <li className="language-item">Verilog</li>
                </ul>

                <ul className="technology">
                    <h3 className="technology-title">Technologies</h3>
                    <li className="technology-item">React.js</li>
                    <li className="technology-item">Node.js</li>
                    <li className="technology-item">Express.js</li>
                    <li className="technology-item">MongoDB</li>
                    <li className="technology-item">AutoCAD</li>
                    <li className="technology-item">Git</li>
                    <li className="technology-item">React Native</li>
                </ul> */}

            </div>
        )
    }
}
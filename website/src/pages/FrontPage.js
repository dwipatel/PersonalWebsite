import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import SkillCard from '../components/skillsCard';
import SkillCard2 from '../components/skillsCard2';
import Logo from '../assets/Logo2.png';
import Project from '../components/project.component';
import ProjectNoGitHub from '../components/projectNoGitHub';

import '../styles/frontPage.css';

export default class FrontPage extends Component {
    render() {
        return (
            <div className="front-page">
                <div className="front-home" id="home">
                    <img src={Logo} alt="Site Logo" className="front-logo"/>
                    <div className="about-container">
                        <div className="name-container">
                            <p className="my-name">Hi, I'm</p>
                            <p className="my-name2">Dwip Patel</p>
                        </div>
                        <p className="my-program">McMaster University, Electrical Engineering 3rd Year</p>
                    </div>
                </div>
                <Nav/>
                <div className="skill-card" id="skills">
                    <div >
                        <p className="skill-title">Skills</p>
                    </div>
                    <div className="skill-list">
                        <div className="lang-block">
                            <h3 className="lang-title">Languages</h3>
                            <SkillCard lang="Java"/>
                            <SkillCard lang="Python"/>
                            <SkillCard lang="HTML"/>
                            <SkillCard lang="CSS"/>
                            <SkillCard lang="C"/>
                            <SkillCard lang="JavaScript"/>
                            <SkillCard lang="Verilog"/>
                        </div>
                        <div className="lang-block">
                            <h3 className="lang-title">Technologies</h3>
                            <SkillCard2 tech="React.js"/>
                            <SkillCard2 tech="Node.js"/>
                            <SkillCard2 tech="Express.js"/>
                            <SkillCard2 tech="MongoDB"/>
                            <SkillCard2 tech="AutoCAD"/>
                            <SkillCard2 tech="Git"/>
                            <SkillCard2 tech="React_Native"/>
                        </div>
                    </div>                    
                </div>
                <div className="project-card" id="projects">
                    <div>
                        <p className="project-title">Projects</p>
                    </div>
                    <div className="project-list">
                        <Project 
                        name="Healix - DeltaHacks V1 " 
                        year="(2020)"
                        link="https://github.com/dwipatel/DeltahacksVI"
                        description="A platform for therapists and patients to communicate at the comfort of their own home."
                        />
                        <Project 
                        name="ToDo List"
                        year="(2019)" 
                        link="https://github.com/dwipatel/ToDo-List"
                        description="Frontend web application to track user’s daily tasks consisting of basic functions such as adding and removing tasks."
                        />
                        <Project 
                        name="BiLLy - RUHacks"
                        year="(2019)"
                        link="https://github.com/dwipatel/BiLLy"
                        description="Developed a web app that helps track and record purchases using photos of receipts."
                        />
                        <Project 
                        name="GOODNIGHT - DeltaHacks V"
                        year="(2019)" 
                        link="https://github.com/dwipatel/DeltahacksV"
                        description="Developed an Android app that diagnoses sleep apnea by analyzing breathing patterns."
                        />
                        <ProjectNoGitHub 
                        name="Prosthetic Hand"
                        year="(2019)"
                        description="Created a functioning 3D printed right hand using a gear train."
                        />
                        {/* <Project 
                        name="Relabrador"
                        year="(2018)"
                        description="Invented a new retractable stylus tool to help our client suffering from multiple sclerosis."
                        /> */}
                        <Project 
                        name="SORRY - Board Game"
                        year="(2018)"
                        link="https://github.com/dwipatel/SORRY-Board-Game"
                        description="Recreation of the board game SORRY including all game features and 1-4 players."
                        />
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import FrontImage from '../front.jpg';
import SkillCard from '../components/skillsCard';
import SkillCard2 from '../components/skillsCard2';
import Header from '../components/header';
import Experience from '../components/experience';
import Logo from '../assets/Logo.png';

import '../styles/frontPage.css';


export default class FrontPage extends Component {
    render() {
        return (
            <div className="front-page">
                <div className="front-home">
                    <img src={Logo} alt="Site Logo" className="front-logo"/>
                    <div className="my-name">
                        <p className="my-name-1">Hi, I'm</p>
                        <p className="my-name-2">Dwip Patel</p>
                    </div>
                    
                </div>
                <Nav/>
                <div className="skill-card">
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
                
            </div>
        )
    }
}
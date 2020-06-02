import React, { Component } from 'react'
import Project from '../components/project.component';
import ProjectNoGitHub from '../components/projectNoGitHub';
import Nav from '../components/navbar.component';
import Header from '../components/header';

import '../styles/projectPage.css';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="projects">
                    <Header title="Projects"/>
                    <Project 
                    name="Healix - DeltaHacks V1 (2020)" 
                    description="A platform for therapists and patients to communicate at the comfort of their own home.
                    Developed the frontend using React.js and implemented a modern UI using CSS styling.
                    Created and integrated several components adding additional functionality to the app.
                    Set up a react router to enable navigation between pages."
                    link="https://github.com/dwipatel/DeltahacksVI"
                    />

                    <Project name="ToDo List - (2019)" 
                    description="Frontend web application to track user’s daily tasks consisting of basic functions such as adding and removing tasks.
                    Created a full stack web app using React.js, Node.js and MongoDB.
                    Implemented full CRUD functionality."
                    link="https://github.com/dwipatel/ToDo-List"
                    />

                    <Project name="BiLLy - RUHacks (2019)"
                    description="Developed a web app that helps track and record purchases using photos of receipts.
                    The UI was initially crafted in HTML using basic CSS and was later converted into component based JSX code."
                    link="https://github.com/dwipatel/BiLLy"
                    />

                    <Project name="GOODNIGHT - DeltaHacks V (2019)" 
                    description="Developed an Android app that diagnoses sleep apnea by analyzing breathing patterns.
                    Used Python and MatPlotLib to analyze audio data to find auditory patterns, resulting in high accuracy diagnosis.
                    Designed the front end of the app using XML layout, resulting in a simpler, user-friendly experience.
                    Winning team of the McMaster Health Challenge."
                    link="https://github.com/dwipatel/DeltahacksV"
                    />
                    
                    <ProjectNoGitHub
                    name="Prosthetic Hand — (2019)"
                    description="Created a functioning 3D printed right hand using AutoCAD.
                    Finger and thumb open and close vie a series of gears that are moved by rotating them."
                    />

                    <ProjectNoGitHub
                    name="Relabrador"
                    description="Invented a new retractable stylus tool to help our client suffering from multiple sclerosis.
                    Generated a design and plan to create such a device and managed, as well as assisted in the assembly of said device."
                    />

                    <Project name="SORRY — Board Game (2018)"
                    description="Complete recreation of the classic board game SORRY including all game features.
                    Used JavaFX to create an interactive 1-4 player game."
                    link="https://github.com/dwipatel/SORRY-Board-Game"
                    />

                    
                </div>
            </div>
        )
    }
}
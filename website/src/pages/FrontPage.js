import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import FrontImage from '../front.jpg';
import SkillCard from '../components/skillsCard.js';
import Header from '../components/header';
import Experience from '../components/experience';

import '../styles/frontPage.css';


export default class FrontPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="front-page">
                    <Header title="Home"/>
                    <div className="text">
                        <p className="my-name">Dwip Patel.</p>
                        <p className="my-program">McMaster University, Electrical Engineering Level III</p>
                    </div>
                    <div className="skill">
                        <SkillCard/>
                    </div>
                    <div className="experience">
                        <p className="experience-title">Experience</p>
                        <Experience 
                        title="Bently Leathers - Sales Associate"
                        date="2019 - August 2019"
                        info="Assisted in day to day store procedures like opening and closing and performed on the spot problem solving when dealing with clients.
                        Demonstrated product knowledge and technical selling skills."
                        />
                        <Experience
                        title="Archway Marketing Services"
                        date="Order Picker and Packer"
                        info="Responsible for moving and distributing goods effectively with precision.
                        Documented all critical information using company software."
                        />
                    </div>
                    
                    
                   
                </div>               
            </div>
            
        )
    }
}
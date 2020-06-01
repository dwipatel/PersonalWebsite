import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import FrontImage from '../front.jpg';
import SkillCard from '../components/skillsCard.js';
import Header from '../components/header';

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
                    
                    
                   
                </div>               
            </div>
            
        )
    }
}
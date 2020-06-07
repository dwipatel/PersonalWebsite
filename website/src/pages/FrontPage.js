import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import FrontImage from '../front.jpg';
import SkillCard from '../components/skillsCard.js';
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
                    <p className="my-name">Hi, I'm Dwip Patel</p>
                </div>
                <Nav/>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import FrontImage from '../front.jpg';
import SkillCard from '../components/skillsCard.js';

import '../styles/frontPage.css';


export default class FrontPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="front-page">
                    <p className="my-name">Dwip Patel.</p>
                    <p className="my-program">McMaster University, Electrical Engineering Level II</p>
                    
                    {/* <div className="front-desc">
                        <p className="my-name">Dwip Patel.</p>
                        <p className="my-program">McMaster University, Electrical Engineering Level II</p>
                    </div> */}
                </div>
                {/* <div className="pic-div">
                    <img className="front-page-pic" src={FrontImage} alt="Front Picture" />
                </div> */}
                <div className="pic-div">
                    <SkillCard />
                </div>
                
            </div>
            
        )
    }
}
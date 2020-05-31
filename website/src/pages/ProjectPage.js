import React, { Component } from 'react'
import Project from '../components/project.component';
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
                    <Project name="BiLLy" description="Made at RUHacksousVBvdisdbavapibSVOJIPSD VOJBS FEDU JFUEHHEFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH J EO J EJ JFVVDVSA VASDV ASDVADSV ASVDASDVA SDVAVASDVASDV ADSVADSVA DVADSVASD VADSVA SDVADSVASD VADSV ADSV ADSVADSV ADS VASD VADSV ADS VADSV"/>
                    <Project name="BiLLy2" description="Made at RUHackssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"/>
                    <Project name="BiLLy2" description="Made at RUHackssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"/>
                    <Project name="BiLLy2" description="Made at RUHackssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"/>
                </div>
            </div>
        )
    }
}
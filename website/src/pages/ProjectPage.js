import React, { Component } from 'react'
import Project from '../components/project.component';
import Nav from '../components/navbar.component';

import '../styles/projectPage.css';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="projects">
                    <Project name="BiLLy" description="Made at RUHacksousVBvdisdbavapibSVOJIPSD VOJBS FEDU JFUEHHEFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH J EO J EJ JFVVDVSA VASDV ASDVADSV ASVDASDVA SDVAVASDVASDV ADSVADSVA DVADSVASD VADSVA SDVADSVASD VADSV ADSV ADSVADSV ADS VASD VADSV ADS VADSV"/>
                    <Project name="BiLLy2" description="Made at RUHackssss"/>
                </div>
            </div>
        )
    }
}
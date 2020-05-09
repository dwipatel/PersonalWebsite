import React, { Component } from 'react'
import Project from './project.component';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Project name="BiLLY" description="Made at RUHacks"/>
                <Project name="BiLLY2" description="Made at RUHackssss"/>
            </div>
        )
    }
}
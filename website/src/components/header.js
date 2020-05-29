import React, { Component } from 'react'
import FrontImage from '../front.jpg';


import '../styles/header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <p> {this.props.title} </p>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Nav from '../components/navbar.component';
import Header from '../components/header';

import '../styles/contactPage.css';

export default class Contact extends Component {
    render() {
        return(
            <div>
                <Nav/>
                <div className="contact-page">
                    <Header title="Contact"/>

                    
                </div>
            </div>
        )
    }
}
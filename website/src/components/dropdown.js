import React, { Component } from 'react'

export default class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
        }, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu() {
        this.setState({ 
            showMenu: false 
        }, () => {
            document.removeEventListener('click', this.closeMenu)
        })
    }
    
    render() {
        return (
            <div>
                <p className="nav-item" onClick={this.showMenu}> {this.props.title} </p>
                {
                    this.state.showMenu ? (
                        <div className="menu">
                            <p className="nav-item2">Skills</p>
                            <p className="nav-item2">Extra-Curriculars</p>
                            <p className="nav-item2">Experience</p>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}
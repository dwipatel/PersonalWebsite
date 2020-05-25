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
                <button className="nav-item" onClick={this.showMenu}><span> Achievments </span></button>
                {
                    this.state.showMenu ? (
                        <div>
                            <button className="nav-item2">Skills</button>
                            <button className="nav-item2">Extra-Curriculars</button>
                            <button className="nav-item2">Experience</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}
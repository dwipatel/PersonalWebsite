import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FrontPage from './pages/FrontPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path="/" exact component={FrontPage}/>
          <Route path="/projects" component={ProjectPage}/>
          <Route path="/contact" component={ContactPage}/>
        </div>
      </Router>
    )
  }
}
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FrontPage from './pages/FrontPage';

export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <FrontPage/>
      </div>
    )
  }
}
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar.component';
import FrontPage from './pages/FrontPage';
import ProjectPage from './pages/ProjectPage';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path="/" exact component={FrontPage}/>
          <Route path="/projects" component={ProjectPage}/>
        </div>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navigation/>
//       </header>
//     </div>
//   );
// }

//export default App;

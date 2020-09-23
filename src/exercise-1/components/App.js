import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path='/about-us' component={About}/>
        </Router>
      </div>
    );
  }
}

export default App;

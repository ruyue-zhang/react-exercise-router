import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;

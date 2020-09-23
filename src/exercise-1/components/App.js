import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" className="nav-link" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                <Link to="/my-profile" className="nav-link" class="nav-link">My Profile</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about-us" className="nav-link" class="nav-link">About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="route">
            <Route exact path='/about-us' component={About}/>
            <Route exact path='/my-profile' component={Profile}/>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

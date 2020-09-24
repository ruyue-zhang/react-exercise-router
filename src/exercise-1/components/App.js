import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Products from '../../exercise-2/components/Products';
import Header from './Header';

class App extends Component {
  handleClick = (event) => {
    event.target.style["textDecoration"] = "underline";
  }
   render() {
    return (
      <div className="app">
        <Router>
          <Header></Header>
          <div className="route">
            <Route exact path='/about-us' component={About}/>
            <Route exact path='/products' component={Products}/>
            <Route path='/products/:id' component={Products}/>
            <Route exact path='/my-profile' component={Profile}/>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
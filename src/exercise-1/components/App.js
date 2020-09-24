import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Products from '../../exercise-2/components/Products';
import Product from '../../exercise-2/components/Product';
import Header from './Header';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
   render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <div className="route">
            <Switch>
              <Route exact path='/about-us' component={About}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/products/:id' component={Product}/>
              <Route exact path='/my-profile' component={Profile}/>
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
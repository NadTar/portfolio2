import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory, withRouter} from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Nav from './Nav'
import Poolbuddy from './portfolio/poolbuddy'
import Sentinel from './portfolio/sentinel'
import Resume from './Resume'
import Button from './components/Button';
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: window.location.pathname
    }
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Nav page={this.state.page}></Nav><br></br><br></br>
          <Switch>
            <Route path="/portfolio2" exact component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/poolbuddy" component={Poolbuddy}/>
            <Route path="/sentinel" component={Sentinel}/>
          </Switch>
          <Footer page={this.state.page}></Footer>
        </div>
      </Router>
    )

  }
}

export default App;



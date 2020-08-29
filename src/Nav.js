import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory, withRouter} from 'react-router-dom'
import Button from './components/Button'
import PropTypes from 'prop-types'


class Nav extends Component {
    constructor(props) {
      super(props)
      this.state = {
        page: this.props.page
      }
    }

    static propTypes={
      page: PropTypes.string
    }

    

    handleClick = (to) => {
        this.setState({page: to})
        this.props.history.push(to)
    }

    render () {
        let x = this.props.location.pathname
        console.log(x)
        if (x !== '/portfolio2/' && x!== '/portfolio2' && x !== '/about' && x !== '/resume') {
            return (
              <nav id="back">
                  <Button img={require("./images/back.svg")} handleClick={this.handleClick.bind(this, '/portfolio2/')}></Button>
              </nav>
              
            )
        
          } else {
            return (
              <div id="navbar">
                <div className="social">
                  <a className="mini" href="https://github.com/NadTar" target="_blank"><img src={require('./images/git.svg')} ></img></a>
                  <a className="mini" href="https://www.linkedin.com/in/nadir-tareen-129760180/" target="_blank"><img src={require('./images/in.svg')} ></img></a>
                </div>
                <nav>
                  <Button text="About" to="/about" handleClick={this.handleClick.bind(this, '/about')} clicked ={x == "/about"}></Button>
                  <Button  text="Resume" to="/resume" handleClick={this.handleClick.bind(this, '/resume')} clicked={x == "/resume"}></Button>
                  <Button text="Portfolio" to="/portfolio2/" clicked={x == "/portfolio2/"} handleClick={this.handleClick.bind(this, '/portfolio2/')}></Button>
                </nav>  
              </div>
            )
          }
    }  
  }

  export default withRouter(Nav)
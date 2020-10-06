import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory, withRouter} from 'react-router-dom'
import Button from './components/Button'
import {Spring} from 'react-spring/renderprops'
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
                <div>
                <Spring config= {{mass: 5, tension: 400, friction: 400}} from={{x: 400}} to={{x: 0}} delay={1800}>{props => (<svg id="ntlogo" viewBox="0 0 110 110" width="80px"
   height="80px" strokeDashoffset={props.x}>            
  <path
     id="path31"
     style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     transform="translate(-201.29 -278.89)"
     d="M305,325.6c1.65,24.72-12.7,47-34,54.4-25.9,9-48.34-8.77-49.63-9.83l.17-58.28" />
  <path
     id="path33"
     style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     transform="translate(-201.29 -278.89)"
     d="m 213.69,362.35 c -13.72,-18.39 -13.14,-45 1.52,-62.67 15,-18.12 40.13,-22.65 59.52,-14.15 18.1,7.93 25.29,24.59 26.91,28.64 l -34,0.24 -10.585,0.125" />
 <rect
     y="75.560989"
     x="10.396679"
     height="9.3912621"
     width="4.0106215"
     id="rect171"
     style={{fill: 'd7e4f1', stroke: "#ffffff", strokeWidth: "0", strokeDasharray: '400'}} />   
  <path
     id="path35"
     style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     transform="translate(-201.29 -278.89)"
     d="M222.1,313.43,248.41,349Z" />
  <path
     id="path37"
     style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     transform="translate(-201.29 -278.89)"
     d="M249,350.63v0Z" />
  <line
    style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     id="line39"
     y2="71.91"
     x2="75.11"
     y1="37.84"
     x1="75.11" />
  <path
     id="path41"
     style={{fill: 'none', stroke: "d7e4f1", strokeWidth: "5px", strokeDasharray: '400'}}
     transform="translate(-201.29 -278.89)"
     d="M214.13,363.91v0Z" />
  <line
     id="line43"
     style={{fill: 'none', stroke: "#d7e4f1", strokeWidth: "5px", strokeDasharray: '400'}}
     y2="45.44"
     x2="97.02"
     y1="45.44"
     x1="106.86" />
  <line
     x1="47.709999"
     y1="33.086678"
     x2="47.709999"
     y2="71.498772"
     style={{fill: 'none', stroke: "#000000", strokeWidth: "5px", strokeDasharray: '400'}}
     id="line52" />
</svg>)}
                </Spring>
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
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'




class Footer extends Component {
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
            return ( 
              <div id="footer">
                <hr></hr> 
                <div className="links">
                    <h3 className={(x === "/" ? 'selected' : '')}><a onClick={this.handleClick.bind(this, '/')}>Portfolio</a></h3>
                    <h3 className={(x === "/resume" ? 'selected' : '')}><a onClick={this.handleClick.bind(this, '/resume')}>Resume</a></h3>
                    <h3 className={(x === "/about" ? 'selected' : '')}><a onClick={this.handleClick.bind(this, '/about')}>About</a></h3>
                    <h3 className={(x === "/poolbuddy" ? 'selected' : '')}><a onClick={this.handleClick.bind(this, '/poolbuddy')}>Poolbuddy</a></h3>
                    <h3 className={(x === "/sentinel" ? 'selected' : '')}><a onClick={this.handleClick.bind(this, '/sentinel')}>Sentinel</a></h3>
                </div><br></br>
                <div className="social">
                  <a className="mini" href="https://github.com/NadTar" target="_blank"><img src="./images/git.svg" ></img></a>
                  <a className="mini" href="https://www.linkedin.com/in/nadir-tareen-129760180/" target="_blank"><img src="./images/in.svg" ></img></a>
                </div>
              </div>
            )
          }
    }  

  export default withRouter(Footer)
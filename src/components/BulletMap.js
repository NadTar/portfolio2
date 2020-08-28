
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {useHistory, useLocation, withRouter} from 'react-router-dom'

class BulletMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    }
  }

  static propTypes = {
      text: PropTypes.string,
      img: PropTypes.string,
      target: PropTypes.string
  }


  onHover = () => {
    this.setState({hovered:true})
    let e = document.createElement('img')
    e.src = this.props.img
    e.id = 'del'
    let t = document.querySelector(this.props.target)
    console.log(t.parentNode)
    t.parentNode.replaceChild(e, t)
    
  }

  mouseOut = (e) => {
    this.setState({hovered: false}) 
    let t = document.querySelector('#del')
    let d = document.createElement('img')
    d.src = './images/proposal/default.jpg'
    d.id ='def'
    t.parentNode.replaceChild(d, t)
    
  }


  render () {
    const {
      text,
      img,
      target
  } = this.props
    return (
        <div style={{margin: '7px'}}>
            <p onMouseEnter={this.onHover} onMouseLeave={this.mouseOut} style={{textDecoration: this.state.hovered ? 'bold' : 'underline',}}><b>{text}</b></p>
        </div>
    )
  }

}

export default withRouter(BulletMap)
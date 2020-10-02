
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import NeuCard2 from './NeuCard2'
import { useState, useEffect } from 'react'
import {Spring} from 'react-spring/renderprops'


export default class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      hovered: false,
      clicked: false,
      width: window.innerWidth
    }

  }

  static propTypes = {
      img: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      link: PropTypes.string,
      descr: PropTypes.string,
      year: PropTypes.string,
      time: PropTypes.string
  }



  onClick = () => {
  this.setState({ hovered:false, clicked: !this.state.clicked });  }

  mouseOver = () => {
    this.setState({hovered:true})
  }
  mouseOut = (e) => {
    this.setState({hovered: false})  
  }
  render () {
    
    const {
        img,
        name,
        role,
        link,
        desc,
        year,
        time
    } = this.props
    return (
        <NeuCard2  width="65vw" height="auto" hovered={this.state.hovered} clicked={this.state.clicked}  mouseOver={this.mouseOver} mouseOut={this.mouseOut}>
            <Spring  from={{opacity: 1}} to={{opacity: this.state.hovered ? 0 : 1}}  config={{mass: 5, tension: 400, friction: 0, clamp: true}}>{props => (<img src={img} style={{height: 'auto', width: '95%'}}/>)}</Spring>
            <Spring from={{opacity: 0, marginTop: '50px'}} to={{opacity: this.state.hovered ? 1 : 0, marginTop: this.state.hovered ? '0px' : '50px'}}  config={{mass: 5, tension: 600, friction: -5, clamp: true}}>
              {props => (<div className= "overlay" style={props}>
                    <h1>{name}</h1>
                    <h2>{role}</h2>
                    <p style={{width: '75%', margin: 'auto'}}>{desc}</p>
                    <h4>{year} - Read Time: {time}</h4>
                    <img src={img} style={{width: '40%', height: 'auto', marginBottom: "5px"}}></img>
              </div>)}</Spring>
        </NeuCard2>
    )
  }
}
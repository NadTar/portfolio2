
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import NeuCard2 from './NeuCard2'
import { useState, useEffect } from 'react'


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
    !this.state.clicked && this.setState({hovered:true})
    console.log(this.state.hovered)
  }
  mouseOut = (e) => {
    this.setState({hovered: false})  
    console.log(e.type)
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
            <img src={img} style={{height: 'auto', width: '95%'}}/>
            {this.state.hovered && <div className= "overlay">
                    <h1>{name}</h1>
                    <h2>{role}</h2>
                    <p style={{width: '75%', margin: 'auto'}}>{desc}</p>
                    <h4>{year} - Read Time: {time}</h4>
                    <img src={img} style={{width: '40%', height: 'auto', marginBottom: "5px"}}></img>
                </div>}
        </NeuCard2>
    )
  }
}
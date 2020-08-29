import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class NeuButton2 extends Component {
  static propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
    to: PropTypes.string,
    hovered: PropTypes.bool,
    clicked: PropTypes.bool,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string
  }
  
  render() {
    const {
      text,
      to,
      img,
      hovered,
      clicked,
      mouseOver,
      mouseOut,
      onClick,
      className
    } = this.props

    return (
        <div style={{
          display:'block',
          borderRadius: '20px',
          paddingTop: '20px',
          outline: '0',
          fontWeight: '600',
          color: hovered ? 'black' : 'black',
          paddingBottom: '20px',
          textAlign: 'center',
          border: '0',
          cursor: 'pointer',
          minHeight: '25px',
          width: '25%',
          minWidth: "80px",
          maxWidth: '160px',
          marginLeft: '20px',
          marginTop: '10px',
          transform: clicked ? 'scale(0.98)' : '',
          backgroundColor: hovered ? '#d7e4f5' : '#d7e4f1',
          boxShadow: clicked ? '9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset' : '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        }} onMouseEnter={mouseOver} onMouseLeave={mouseOut} onClick={onClick} className={className}>
              {text}
              {img !== null && <img src={img} style={{maxHeight: '25px', maxWidth: '25px', alignSelf: "left"}}></img>}
          </div>
        
    )
  }
}

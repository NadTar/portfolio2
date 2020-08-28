import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findByLabelText } from '@testing-library/react'

export default class NeuForm extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func,
  }

  inputStyle ={
    backgroundColor: 'd7e4f1', 
    boxShadow: '9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset',
    outline: '0',
    border: '0',
    borderRadius: '20px',
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingTop: "20px",
    marginBottom: '10px'
  }

  buttonStyle = {
    display:'block',
    fontSize: '18px',
    borderRadius: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    outline: '0',
    fontWeight: '600',
    textAlign: 'center',
    border: '0',
    cursor: 'pointer',
    minHeight: '25px',
    height: '40px',
    width: '25%',
    minWidth: "20px",
    maxWidth: '160px',
    backgroundColor: '#d7e4f1',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
  }

  render() {
    const {
      children,
      width,
      height,
      mouseOver,
      mouseOut,
      onClick
    } = this.props

    return (
      <form >
        <label for="name">Your Name:</label><br></br>
        <input type="text" id="name"  name="name" style={this.inputStyle}></input><br></br>
        <label for="email">Your Email:</label><br></br>
        <input type="text" id="email"  name="email" style={this.inputStyle}></input><br></br>
        <label for="subject">Subject:</label><br></br>
        <input type="text"  id="subject"name="subject" style={this.inputStyle}></input><br></br>
        <label for="message" >Message:</label><br></br>
        <textarea type="text" id="message" name="message" style={this.inputStyle}></textarea><br></br>
        <input type="submit" value="Send" id="submit" style={this.buttonStyle}></input>
      </form>
    )
  }
}

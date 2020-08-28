import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findByLabelText } from '@testing-library/react'

export default class NeuCard2 extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func,
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
      <div id="test" style={{
        position: 'relative',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        height: height||'40vw',
        maxHeight: '80vh',
        width: width||'100%',
        backgroundColor: '#d7e4f1',
        marginBottom: "20px",
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
    }} onMouseEnter={mouseOver} onMouseLeave={mouseOut} onClick={onClick}>{children}
      </div>
    )
  }
}

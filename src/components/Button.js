
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {useHistory, useLocation, withRouter} from 'react-router-dom'
import NeuButton2 from './NeuButton2';

class Button extends Component {

  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    }
  }

  static propTypes = {
      text: PropTypes.string,
      to: PropTypes.string,
      img: PropTypes.string,
      clicked: PropTypes.bool,
      mouseOver: PropTypes.func,
      mouseOut: PropTypes.func,
      handleClick: PropTypes.func,
      className: PropTypes.string
  }




  mouseOver = () => {
    this.setState({hovered:true})
  }

  mouseOut = (e) => {
    this.setState({hovered: false})  
  }


  render () {
    const {
      text,
      to,
      img,
      className
  } = this.props
    return (
     <NeuButton2 text={text} img={img} hovered={this.state.hovered} clicked = {this.props.clicked} onClick={this.props.handleClick} mouseOver={this.mouseOver} mouseOut={this.mouseOut} to={to} className={className}>

     </NeuButton2>
    )
  }

}

export default withRouter(Button)
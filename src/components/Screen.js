
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Screen extends Component {

  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    }
  }

  static propTypes = {
      cap: PropTypes.string,
      img: PropTypes.string,
      maxHeight: PropTypes.string,
      className: PropTypes.string,
      onLoad: PropTypes.func
  }


  onHover = () => {
    this.setState({hovered:true})
    
  }

  mouseOut = (e) => {
    this.setState({hovered: false}) 
    
  }


  render () {
    const {
      cap,
      img,
      maxHeight,
      className,
      onLoad
  } = this.props
    return (
        <div className = {className} style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: "center", maxWidth: '15vw'}}>
            <img src={img} className="screen" style={{maxHeight: maxHeight || '50vh'}} onLoad={onLoad}></img>
            <p style={{fontSize: '0.8em'}}>{cap}</p>
        </div>
    )
  }

}

export default Screen
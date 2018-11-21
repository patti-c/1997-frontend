import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Draggable from 'react-draggable'
import './Window.css'

class Window extends Component {

  renderWindow() {
    switch(this.props.name) {
      case 'Sign In':
        return(<Signin />)
      default:
        return null
    }
  }

  render() {
    return (
      <Draggable
        handle=".handle"
      >
        <div className="window inverted-border">
          <div className="bluebar handle">{this.props.name}
            <button className="standard-button close-window oldschool-border">X</button>
          </div>
          <div>{this.renderWindow()}</div>
        </div>
      </Draggable>
    )
  }
}

export default Window

import React, { Component } from 'react'
import './StartButton.css'
import { connect } from 'react-redux'
import { openWindow } from '../../redux/actions'
import starticon from '../../assets/icons/settings-gear.png'

class StartButton extends Component {

  render() {
    return(
      <button
        className="start-button standard-button inverted-border"
        onClick={() => this.props.openWindow({name: 'Settings'})}
      >
        <img src={starticon} alt="start icon" className="start-icon"/>
        Settings
      </button>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    openWindow: (windowName) => dispatch( openWindow(windowName) )
  }
}

export default connect(null, mapDispatchToProps)(StartButton)

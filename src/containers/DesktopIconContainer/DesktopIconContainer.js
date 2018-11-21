import React, { Component } from 'react'
import DesktopIcon from '../../components/DesktopIcon/DesktopIcon'
import './DesktopIconContainer.css'
import { connect } from 'react-redux'
import { openWindow } from '../../redux/actions'

class DesktopIconContainer extends Component {
  render() {
    return (
      <div className="desktop-icons-container">
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow('Sign In')}>
          <DesktopIcon fileName={'windowsglobe'}/>
          <label>Sign in</label>
        </div>
        <div className="desktop-icon">
          <DesktopIcon fileName={'largehelpbook'}/>
          <label>About</label>
        </div>
        <div className="desktop-icon">
          <DesktopIcon fileName={'people'}/>
          <label>Friends</label>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openWindow: (windowName) => dispatch( openWindow(windowName) )
  }
}

export default connect(null, mapDispatchToProps)(DesktopIconContainer)

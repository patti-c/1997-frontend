import React, { Component } from 'react'
import DesktopIcon from '../../components/DesktopIcon/DesktopIcon'
import './DesktopIconContainer.css'
import { connect } from 'react-redux'
import { openWindow } from '../../redux/actions'

class DesktopIconContainer extends Component {

  constructor() {
    super()
    this.state = {
      trashEmpty: true
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.fillTrash, 20000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fillTrash = () =>  {
    this.setState({
      trashEmpty: false
    })
  }

  emptyTrash = () => {
    this.setState({
      trashEmpty: true
    })
  }

  render() {
    return (
      <div className="desktop-icons-container">
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow({name: 'Sign In'})}>
          <DesktopIcon fileName={'windowsglobe'}/>
          <label>Sign in</label>
        </div>
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow({name: 'About'})}>
          <DesktopIcon fileName={'largehelpbook'}/>
          <label>About</label>
        </div>
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow({name: 'Friends List'})}>
          <DesktopIcon fileName={'people'}/>
          <label>Friends</label>
        </div>
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow({name: 'WebberNet Discoverer'})}>
          <DesktopIcon fileName={'ie2'}/>
          <label>WebberNet Discoverer</label>
        </div>
        <div className="desktop-icon" onDoubleClick={() => this.props.openWindow({name: 'Plastic Love'})}>
          <DesktopIcon fileName={'plastic-love-icon'}/>
          <label className="multiline-label">plastic_</label>
          <label className="multiline-label">love.mp3</label>
        </div>
        <div className="desktop-icon" onDoubleClick={this.emptyTrash} >
          {this.state.trashEmpty ?
            <DesktopIcon fileName={'recycle_bin_empty_cool-0'}/> :
            <DesktopIcon fileName={'recycle_bin_full_cool-0'}/>
          }
          <label className="multiline-label">Recycle Bin</label>
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

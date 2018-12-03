import React, { Component } from 'react'
import './SettingsContainer.css'
import Adapter from '../../Adapter'
import { connect } from 'react-redux'
import { closeWindow, modifySettings } from '../../redux/actions'
const api = new Adapter()

class SettingsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      hidden: props.hidden,
      muted: props.muted
    }
  }

  submitChanges = e => {
    let token = localStorage.getItem('token')
    this.state.hidden ? api.postWithTokenWithoutJson(token, 'hide') : api.postWithTokenWithoutJson(token, 'unhide')
    this.state.muted ? api.postWithTokenWithoutJson(token, 'mute') : api.postWithTokenWithoutJson(token, 'unmute')
    this.props.modifySettings(this.state)
  }

  toggleHidden = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  toggleMuted = () => {
    this.setState({
      muted: !this.state.muted
    })
  }

  render() {
    return(
      <div className="settings-container">
        <div className="settings-menu inverted-border">
          <div className="option">Show friends when I'm online?
            <span onClick={this.toggleHidden} className="checkbox settings-check">
              {this.state.hidden === true ? null : <div className="checkmark">✓</div>}
            </span>
          </div>
          <div className="option">Mute sounds?
            <span onClick={this.toggleMuted} className="checkbox settings-check">
              {this.state.muted === true ? <div className="checkmark">✓</div> : null}
            </span>
          </div>
        </div>
        <div className="settings-button-area">
          <button onClick={this.submitChanges} className="standard-button inverted-border settings-button ok-button">Apply</button>
          <button className="standard-button inverted-border settings-button cancel-button" onClick={() => this.props.closeWindow(this.props.id)}>Cancel</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    muted: state.user.muted,
    hidden: state.user.hidden
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: (windowId) => dispatch( closeWindow(windowId) ),
    modifySettings: (settings) => dispatch( modifySettings(settings) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)

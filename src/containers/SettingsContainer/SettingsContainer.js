import React, { Component } from 'react'
import './SettingsContainer.css'
import Adapter from '../../Adapter'
import { connect } from 'react-redux'
import { closeWindow } from '../../redux/actions'
const api = new Adapter()

class SettingsContainer extends Component {

  constructor(){
    super()
    this.state = {
      hidden: false
    }
  }

  submitChanges = e => {
    let token = localStorage.getItem('token')
    this.state.hidden ? api.postWithTokenWithoutJson(token, 'hide') : api.postWithTokenWithoutJson(token, 'unhide')
  }

  toggleHidden = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return(
      <div className="settings-container">
        <div className="settings-menu inverted-border">
          <div className="option">Show friends when I'm online?
            <span onClick={this.toggleHidden} className="checkbox settings-check">
              {this.state.hidden === false ? <div className="checkmark">✓</div> : null}
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

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: (windowId) => dispatch( closeWindow(windowId) )
  }
}

export default connect(null, mapDispatchToProps)(SettingsContainer)

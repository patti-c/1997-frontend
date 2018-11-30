import React, { Component } from 'react'
import './SettingsContainer.css'

class SettingsContainer extends Component {

  constructor(){
    super()
    this.state = {
      hidden: false
    }
  }

  submitChanges = e => {

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
          <button className="standard-button inverted-border settings-button ok-button">Apply</button>
          <button className="standard-button inverted-border settings-button cancel-button">Cancel</button>
        </div>
      </div>
    )
  }
}

export default SettingsContainer

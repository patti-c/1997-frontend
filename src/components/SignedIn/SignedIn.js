import React, { Component } from 'react'
import './SignedIn.css'
import { logoutUser } from '../../redux/actions'
import { connect } from 'react-redux'
import startupsound from '../../assets/sound/95startup.mp3'
import Adapter from '../../Adapter'
const api = new Adapter()

class SignedIn extends Component {

  logout = () => {
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, 'logout')
    localStorage.removeItem('token')
    this.props.logoutUser()
  }

  componentDidMount = () => {
    const sound = new Audio(startupsound)
    sound.play()
  }

  render() {
    return (
      <div className="signed-in">
        <h3>You have been signed in</h3>
        <button onClick={this.logout} className="standard-button inverted-border">Sign Out</button>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch( logoutUser() )
  }
}

export default connect(null, mapDispatchToProps)(SignedIn)

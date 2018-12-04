import React, { Component } from 'react'
import './SignedIn.css'
import { logoutUser } from '../../redux/actions'
import { connect } from 'react-redux'

import Adapter from '../../Adapter'
const api = new Adapter()

class SignedIn extends Component {

  logout = () => {
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, 'logout')
    localStorage.removeItem('token')
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="signed-in">
        <h3>You have been signed in</h3>
        <button onClick={this.logout} className="large-button standard-button inverted-border">Sign Out</button>
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

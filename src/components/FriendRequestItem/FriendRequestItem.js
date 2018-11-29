import React, { Component } from 'react'
import './FriendRequestItem.css'
import Adapter from '../../Adapter'
import { connect } from 'react-redux'
import { acceptFriendRequest, denyFriendRequest } from '../../redux/actions'
const api = new Adapter()

class FriendRequestItem extends Component {

  acceptFriendRequest = () => {
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, '/accept_request',
      {adder: this.props.adder,
        added: this.props.added
      }
    )
    this.props.acceptRequest(this.props.adder)
  }

  denyFriendRequest = () => {
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, '/deny_request',
      {adder: this.props.adder,
        added: this.props.added
      }
    )
    this.props.denyRequest(this.props.adder)
  }

  render() {
    return (
      <>
        <li>{this.props.adder}
          <button onClick={this.acceptFriendRequest} className="standard-button inverted-border check">✓</button>
          <button onClick={this.denyFriendRequest} className="standard-button inverted-border x">X</button>
        </li>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    acceptRequest: (friend) => dispatch( acceptFriendRequest(friend) ),
    denyRequest: (friend) => dispatch( denyFriendRequest(friend) )
  }
}

export default connect(null, mapDispatchToProps)(FriendRequestItem)

import React, { Component } from 'react'
import './FriendRequestItem.css'
import Adapter from '../../Adapter'
const api = new Adapter()

class FriendRequestItem extends Component {

  acceptFriendRequest = () => {
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, '/accept_request',
      {adder: this.props.adder,
        added: this.props.added
      }
    )
  }

  render() {
    return (
      <>
        <li>{this.props.adder}
          <button onClick={this.acceptFriendRequest} className="standard-button inverted-border check">✓</button>
          <button className="standard-button inverted-border x">X</button>
        </li>
      </>
    )
  }
}

export default FriendRequestItem

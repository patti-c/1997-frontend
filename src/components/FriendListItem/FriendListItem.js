import React, { Component } from 'react'
import './FriendListItem.css'

class FriendListItem extends Component {

  checkOnline() {
    return this.props.friend.online ? "green" : "grey"
  }

  render() {
    return(
      <li
        onClick={() => this.props.openWindow({name: 'Conversation', data: this.props.friend})}
      >
        <span className="dot" style={{backgroundColor: this.checkOnline()}}></span>{this.props.friend.username}
      </li>
    )
  }
}

export default FriendListItem

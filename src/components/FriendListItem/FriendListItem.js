import React, { Component } from 'react'

class FriendListItem extends Component {
  render() {
    return(
      <li onClick={() => this.props.openWindow({name: 'Conversation', data: this.props.friend})}>{this.props.friend.username}</li>
    )
  }
}

export default FriendListItem

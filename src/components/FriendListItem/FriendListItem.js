import React, { Component } from 'react'

class FriendListItem extends Component {
  render() {
    return(
      <div onClick={() => this.props.openWindow({name: 'Conversation', data: this.props.friend})}>{this.props.friend.username}</div>
    )
  }
}

export default FriendListItem

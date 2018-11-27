import React, { Component } from 'react'
import { connect } from 'react-redux'
import FriendListItem from '../../components/FriendListItem/FriendListItem'
import './FriendsContainer.css'
import { openWindow } from '../../redux/actions'
import { API_ROOT } from '../../constants/constants'

class FriendsContainer extends Component {

  renderFriendsList() {
    return this.props.friends.map(friend =>
      <FriendListItem
        openWindow={this.props.openWindow}
        key={friend.username}
        friend={friend}
        handleReceivedMessage = {this.handleReceivedMessage}
      />)
  }

  render () {
    return (
      <div className="friends-list-container">
        <h3>
        Your Friends
        </h3>
        {this.props.friends ? this.renderFriendsList() : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {friends: state.user.friends}
}

const mapDispatchToProps = dispatch => {
  return {
    openWindow: (payload) => dispatch( openWindow(payload) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

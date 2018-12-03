import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import FriendListItem from '../../components/FriendListItem/FriendListItem'
import FriendRequestItem from '../../components/FriendRequestItem/FriendRequestItem'
import FriendRequestForm from '../../components/FriendRequestForm/FriendRequestForm'
import { ActionCable } from 'react-actioncable-provider'
import './FriendsContainer.css'
import { openWindow, loginFriend, logoutFriend } from '../../redux/actions'
import headerImage from '../../assets/images/instantmessaging.png'

class FriendsContainer extends Component {

  renderFriendsList() {
    return this.props.friends.map(friend =>
      <>
        <FriendListItem
          openWindow={this.props.openWindow}
          key={uuid()}
          friend={friend}
          handleReceivedMessage = {this.handleReceivedMessage}
          online={friend.online}
        />
        <ActionCable
          key={uuid()}
          channel={{ channel: 'UsersChannel',
                     username: friend.username}}
          onReceived = {(response) => this.setLoginStatus(response, friend.username)}
        />
      </>
    )
  }

  setLoginStatus(response, friend) {
    if(response === 'online') {
      console.log(`${friend} is now online`)
      this.handleFriendLogin(friend)
    } else {
      console.log(`${friend} is now offline`)
      this.handleFriendLogout(friend)
    }
  }

  handleFriendLogout(friend) {
    this.props.logoutFriend(friend)
  }

  handleFriendLogin(friend) {
    this.props.loginFriend(friend)
  }

  renderPendingRequests() {
    return this.props.friend_requests.pending_requests.map(request =>
      <FriendRequestItem key={request} adder={request} added={this.props.username}/>
    )
  }

  render () {
    return (
      <div className="friends-list-body">
        <img alt="instantaneous messaging header" className="friends-header-image" src={headerImage}/>
        <FriendRequestForm adder={this.props.username}/>
        <div className="friends-list-container-container inverted-border">
          <div className="friends-list-container oldschool-border">
            <p className="your-friends-header">
              Friend Requests
            </p>
            <ul className="friends-list-ul">
              {this.props.friend_requests ? this.renderPendingRequests() : null}
            </ul>
            <p className="your-friends-header">
              Your Friends
            </p>
            <ul className="friends-list-ul">
              {this.props.friends ? this.renderFriendsList() : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if(state.friends) {
    return {
      friends: state.friends,
      friend_requests: state.user.friend_requests,
      username: state.user.username
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openWindow: (payload) => dispatch( openWindow(payload) ),
    loginFriend: (friend) => dispatch ( loginFriend(friend) ),
    logoutFriend: (friend) => dispatch ( logoutFriend(friend) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import FriendListItem from '../../components/FriendListItem/FriendListItem'
import FriendRequestItem from '../../components/FriendRequestItem/FriendRequestItem'
import FriendRequestForm from '../../components/FriendRequestForm/FriendRequestForm'
import './FriendsContainer.css'
import { openWindow } from '../../redux/actions'
import headerImage from '../../assets/images/instantmessaging.png'

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

  renderPendingRequests() {
    return this.props.pending_requests.map(request =>
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
              {this.props.pending_requests ? this.renderPendingRequests() : null}
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
  if(state.user.friends) {
    return {
      friends: state.user.friends,
      pending_requests: state.user.friend_requests.pending_requests,
      username: state.user.username
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openWindow: (payload) => dispatch( openWindow(payload) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

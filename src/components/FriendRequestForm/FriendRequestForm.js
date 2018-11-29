import React, { Component } from 'react'
import './FriendRequestForm.css'
import Adapter from '../../Adapter'
const api = new Adapter()

class FriendRequestForm extends Component {

  constructor() {
    super()
    this.state = {
      searchText: ''
    }
  }

  onChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    if(this.state.searchText !== '') {
      const token = localStorage.getItem('token')
      const payload = {
        adder: this.props.adder,
        added: this.state.searchText
      }

      api.postWithTokenWithoutJson(token, '/send_friend_request', payload)
        .then(
          this.setState({
            searchText: ''
          })
        )
    }
  }

  render() {
    return (
      <form className="friends-request-form" onSubmit={this.onSubmit}>
        <input className="friends-input oldschool-border" onChange={this.onChange} value={this.state.searchText} type="text"/>
        <button className="inverted-border new-friend-button standard-button">ADD</button>
      </form>
    )
  }
}

export default FriendRequestForm

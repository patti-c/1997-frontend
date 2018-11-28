import React, { Component } from 'react'
import Adapter from '../../Adapter'
const api = new Adapter()

class Chatbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    let token = localStorage.getItem('token')
    api.postWithTokenWithoutJson(token, 'messages', {text: this.state.text, conversationId: this.props.conversation.id, user: this.props.user})
      .then(this.setState({ text: '' }))
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.text}
            onChange={this.handleChange}
            className="chatbox oldschool-border"/>
          <button
            type="submit"
            className="chatbox-submit standard-button inverted-border"
          >SEND</button>
        </form>
      </>
    )
  }
}

export default Chatbox

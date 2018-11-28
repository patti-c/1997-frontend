import React, { Component } from 'react'
import './MessageBox.css'


class MessageBox extends Component {

  renderMessages() {
    return this.props.messages.map(m => <li>{m.username}: {m.text}</li>)
  }

  render() {
    return (
      <div className="message-box oldschool-border">
        <ul className="messages-ul">
          {this.props.messages ?
            this.renderMessages() : null}
        </ul>
      </div>
    )
  }
}

export default MessageBox

import React, { Component } from 'react'
import Message from '../../components/Message/Message'
import {connect} from 'react-redux'
import uuid from 'uuid'
import './MessageBox.css'


class MessageBox extends Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  renderMessages() {
    return this.props.messages.map(m => <Message key={uuid()} messageUser={m.username} activeUser={this.props.username} text={m.text}/>)
  }

  render() {
    return (
      <div className="message-box oldschool-border">
        <ul className="messages-ul">
          {this.props.messages ?
            this.renderMessages() : null}
        </ul>
        <div
          style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}
        >
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps)(MessageBox)

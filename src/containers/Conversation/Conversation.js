import React, { Component } from 'react'
import './Conversation.css'
import Chatbox from '../../components/Chatbox/Chatbox'
import MessageBox from '../MessageBox/MessageBox'
import { ActionCable } from 'react-actioncable-provider';
import Adapter from '../../Adapter'
import { connect } from 'react-redux'
import bing from '../../assets/sound/im.mp3'
const api = new Adapter()

class Conversation extends Component {

  state = {
    conversation: null,
    messages: [],
    sound: null
  }

  handleReceivedMessage = response => {
    if(this.state.sound && !this.props.muted) {
      this.state.sound.play()
    }
    const { message } = response;
    this.setState({ messages: [...this.state.messages, message] });
  };

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    let body = { username: this.props.data.username }
    api.postWithToken(token, '/get_conversation', body)
      .then(convo => this.setState({
        conversation: convo,
        messages: convo.messages
      }))
  }

  loadSound = () => {
    let sound = new Audio(bing)
    this.setState({
      sound: sound
    })
  }

  render() {
    return (
      <div className="conversation" onClick={this.loadSound}>
      {this.state.conversation ?
        <>
          <ActionCable
            channel={{ channel: 'MessagesChannel',
                       conversation: this.state.conversation.id}}
            onReceived = {this.handleReceivedMessage}
          />
          <MessageBox conversation={this.state.conversation} messages={this.state.messages} />
          <Chatbox user={this.props.user} conversation = {this.state.conversation}/>
        </>
        :
        null}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.username,
    muted: state.user.muted
  }
}

export default connect(mapStateToProps)(Conversation)

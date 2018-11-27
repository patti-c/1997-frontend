import React, { Component } from 'react'
import './Conversation.css'
import Chatbox from '../../components/Chatbox/Chatbox'
import MessageBox from '../MessageBox/MessageBox'
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../../constants/constants'
import Adapter from '../../Adapter'
const api = new Adapter()

class Conversation extends Component {

  state = {
    conversation: null,
    messages: []
  }

  handleReceivedMessage = response => {
    const { message } = response;
    this.setState({ messages: [...this.state.messages, message] });
  };

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    let body = { username: this.props.data.username }
    api.postWithToken(token, '/get_conversation', body)
      .then(convo => this.setState({conversation: convo}))
  }

  render() {
    return (
      <div className="conversation">
      {this.props.conversation ?
        <ActionCable
          channel={{ channel: 'MessagesChannel',
                     conversation: this.props.conversation.id}}
          onReceived = {this.handleReceivedMessage}
        />
        :
        null}
        <MessageBox messages={this.state.messages} />
        <Chatbox conversation = {this.props.conversation}/>
      </div>
    )
  }
}

export default Conversation

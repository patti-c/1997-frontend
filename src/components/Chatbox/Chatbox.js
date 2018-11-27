import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../constants/constants'

class Chatbox extends Component {

  state = {
    text: '',
    conversation: this.props.conversation
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render() {
    return (
      <>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          className="chatbox oldschool-border"/>
        <button
          type="submit"
          className="chatbox-submit standard-button inverted-border"
        >Submit</button>
      </>
    )
  }
}

export default Chatbox

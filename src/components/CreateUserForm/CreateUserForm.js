import React, { Component } from 'react'
import './CreateUserForm.css'

class CreateUserForm extends Component {

  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
      name: null,
      email: null
    }
  }

  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(e) => this.props.submit(e, this.state)}
        style={{margin: "5%"}}
      >
        <div className="field">
          <label>Username</label>
          <input className="oldschool-border" type="text" name="username" placeholder="Your username" onChange={this.changeState} />
          <label>Full Name</label>
          <input className="oldschool-border" type="text" name="name" placeholder="Your full name" onChange={this.changeState} />
          <label>E-Mail Address</label>
          <input className="oldschool-border" type="text" name="email" placeholder="Your E-Mail" onChange={this.changeState} />
          <label>Password</label>
          <input className="oldschool-border" type="password" name="password" placeholder="Your password" onChange={this.changeState} />
        </div>
        <button className="standard-button inverted-border" type="submit">Submit</button>
      </form>
    )
  }
}

export default CreateUserForm

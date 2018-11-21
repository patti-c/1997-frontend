import React, { Component } from 'react'
import UserForm from '../../components/UserForm/UserForm'
import './Signin.css'

class Signin extends Component {
  render() {
    return (
      <div className="signin-or-create">
        <div className="column">
          <label>Log in</label>
          <UserForm />
        </div>
        <div className="column">
          <label>Create User</label>
          <UserForm />
        </div>
      </div>
    )
  }
}

export default Signin

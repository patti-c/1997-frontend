import React, { Component } from 'react'
import './Signin.css'
import Adapter from '../../Adapter'
import LoginForm from '../../components/LoginForm/LoginForm'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import SignedIn from '../../components/SignedIn/SignedIn'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'
import icon from '../../assets/icons/computer.png'
const api = new Adapter()

class Signin extends Component {

  constructor() {
    super()
    this.state = {
      rightColumn: false
    }
  }

  renderRightColumn() {
    switch(this.state.rightColumn) {
      case 'login':
        return(
          <><label>Log in</label>
          <LoginForm submit={this.attemptLogin} /></>
        )
      case 'create':
        return (
          <><label>Create User</label>
          <CreateUserForm submit={this.attemptCreation}/></>
        )
      default:
        return (
          <img alt={icon} src={icon}/>
        )
    }
  }

  setRightColumn = (e) => {
    this.setState({
      rightColumn: e.target.name
    })
  }

  renderLeftColumn() {
    return (
      <div className="buttons">
        <button onClick={this.setRightColumn} name="login" className="standard-button inverted-border choice">Log in</button>
        <button onClick={this.setRightColumn} name="create" className="standard-button inverted-border choice">Create User</button>
      </div>
    )
  }

  attemptCreation = (e, userData) => {
    e.preventDefault()
    api.genericPost('users', {user: userData})
  }

  attemptLogin = (e, userData) => {
    e.preventDefault()
    api.genericPost('login', {user: userData}).then(json =>
      {if(json.jwt) {
        localStorage.setItem('token', json.jwt)
        this.props.loginUser(json.user)
      }}
    )
  }

  render() {
    return (
      <>
        {!localStorage.token ?
          <div className="signin-or-create">
            <div className="column">
              {this.renderLeftColumn()}
            </div>
            <div className="column">
              {this.renderRightColumn()}
            </div>
          </div>
        :
          <SignedIn/>}
      </>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch( loginUser(user) )
  }
}

const mapStateToProps = state => {
    return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

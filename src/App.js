import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar.js'
import DesktopIconContainer from './containers/DesktopIconContainer/DesktopIconContainer'
import { loginUser } from './redux/actions'
import { connect } from 'react-redux'
import Window from './containers/Window/Window'

class App extends Component {

  constructor() {
    super()
    this.state = {
      openWindows: []
    }
  }

  renderWindows() {
    // Redux keeps track of what windows are open. App iterates over that store
    // to produce the correct windows.
    return this.props.windows.map(w => <Window key={w.id} name={w.name} id={w.id} data={w.data}/>)
  }

  componentDidMount(){
    // If a JWT is found, a user is automatically logged in.
    let token = localStorage.getItem('token')
    if(token){
      fetch(`https://api-1997.herokuapp.com/api/v1/userdata`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }).then(res => res.json())
        .then(json => {
          console.log(json)
          this.props.loginUser(json)
        })
    }
  }

  render() {
    return (
      <div className="App">
        <DesktopIconContainer openWindow={this.openWindow} />
        {this.renderWindows()}
        <Navbar />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { windows: state.windows }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (payload) => dispatch(loginUser(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

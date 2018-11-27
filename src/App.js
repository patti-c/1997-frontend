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
    return this.props.windows.map(w => <Window key={w.id} name={w.name} id={w.id} data={w.data}/>)
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/userdata`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }).then(res => res.json())
        .then(json => {
          console.log(json)
          this.props.loginUser(json.user)
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
  return {windows: state.windows}
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

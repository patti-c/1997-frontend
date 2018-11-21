import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar.js'
import Signin from './containers/Signin/Signin'
import DesktopIconContainer from './containers/DesktopIconContainer/DesktopIconContainer'
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
    return this.props.windows.map(windowName => <Window name={windowName}/>)
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

export default connect(mapStateToProps)(App);

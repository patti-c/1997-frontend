import React, { Component } from 'react'
import './Navbar.css'
import Clock from '../../components/Clock/Clock.js'
import StartButton from '../../components/StartButton/StartButton'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <StartButton />
        <Clock />
      </div>
    )
  }
}

export default Navbar

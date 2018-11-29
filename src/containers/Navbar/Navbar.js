import React, { Component } from 'react'
import './Navbar.css'
import Clock from '../../components/Clock/Clock.js'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Clock />
      </div>
    )
  }
}

export default Navbar

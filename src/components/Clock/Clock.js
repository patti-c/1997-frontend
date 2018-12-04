import React, { Component } from 'react'
import './Clock.css'
import clock from '../../assets/icons/clock-1.png'

class Clock extends Component {

  constructor() {
    super()
    this.state = {
      hour: null,
      minute: null,
      ampm: null
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.getTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime = () => {
    let date = new Date()
    let hour = date.getHours()
    let minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()

    let ampm

    if (hour === 12) {
      ampm = 'PM'
    } else if (hour > 12) {
      hour = hour - 12
      ampm = 'PM'
    } else {
      ampm = 'AM'
    }

    this.setState({
      hour: hour,
      minutes: minutes,
      ampm: ampm
    })
  }

  render() {
    return (
      <div className="clock oldschool-border">
        <img className="clock-icon" src={clock}/>
        {this.state.hour}:{this.state.minutes} {this.state.ampm}
      </div>
    )
  }
}

export default Clock

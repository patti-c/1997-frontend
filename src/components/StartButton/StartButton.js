import React from 'react'
import './StartButton.css'
import globe from '../../assets/icons/globe-mouse.png'

const StartButton = () => {
  return(
    <button className="start-button standard-button inverted-border">
      <img src={globe} alt="globe icon" className="start-icon"/>
      Start
    </button>
  )
}

export default StartButton

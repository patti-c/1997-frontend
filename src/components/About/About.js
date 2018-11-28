import React from 'react'
import './About.css'
import aboutimage from '../../assets/images/smalleraboutimage.png'

const About = () => {
  return (
    <div className="about-page-container">
      <p className="about-p">1997 is a 90s inspired chat app made with React and Rails.
      Messaging is conducted in realtime via ApplicationCable.</p>
      <img className="about-image oldschool-border" alt="abstract about page art" src={aboutimage}/>
    </div>
  )
}

export default About

import React, { Component } from 'react'

const codeFreeze = () => {
 const codeFreeze = Date.parse('December 5, 2018 14:00:00')
 const remainingTime = codeFreeze - Date.parse(new Date())

 if (remainingTime <= 0) {
   return <iframe src="https://giphy.com/embed/T08JhumnpKAI8" width="180" height="150" ></iframe>
 }
   let remainingHours = Math.round(remainingTime / 1000 / 60 / 60)
   return <p>{remainingHours} Hours until code freeze</p>
}

const reassuranceButton = () => {

  const reassuringText = [
    "You have so much time left. You can do this. :)",
    "John Cena believes in you",
    "You are a poetic and noble land-mermaid.",
    "You are a beautiful, talented, brilliant, powerful muskox.",
    "You are an opalescent tree shark.",
    "You are a rainbow infused space unicorn.",
    "You are a beautiful, naïve, sophisticated newborn baby.",
    "You are a beautiful tropical fish - smart as a whip and cool under pressure.",
    "You are a beautiful, sassy mannequin come to life."
  ]

  return <button
            style={{
              'background': 'pink',
              'border-radius': '20px',
              'border': '2px solid #e75480',
              'font-weight': 'bold',
              'font-size': '.8em',
              'color': '#e75480'
            }}
          onClick={
            () => alert(reassuringText[Math.floor(Math.random()*reassuringText.length)])
          }>💖 Get Reassured 💖</button>
}

class Clock extends Component {
  render() {
    return (
      <div className="clock oldschool-border">
        {reassuranceButton()}
      </div>
    )
  }
}

export default Clock

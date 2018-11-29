import React from 'react'

const Message = ({text, messageUser, activeUser}) => {

  const decideColor = (username) => {
    return (username === activeUser) ? 'blue' : 'red'
  }

  return (
    <li><span style={{color: decideColor(messageUser)}}>{messageUser}</span>: {text}</li>
  )
}

export default Message

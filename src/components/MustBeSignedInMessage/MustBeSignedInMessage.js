import React, { Component } from 'react'
import './MustBeSignedInMessage.css'
import icon from '../../assets/icons/defragment.png'

class MustBeSignedInMessage extends Component {
  render() {
    return(
      <div className="must-be-signed-in-container">
        <div className="error-text">You must be signed in to view this page</div>
        <img alt="defragment icon" className="defragment" src={icon}/><img alt="defragment icon" className="defragment" src={icon}/><img alt="defragment icon" className="defragment" src={icon}/><img alt="defragment icon" className="defragment" src={icon}/>
      </div>
    )
  }
}

export default MustBeSignedInMessage

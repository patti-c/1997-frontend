import React, { Component } from 'react'
import './WebSearch.css'

class WebSearch extends Component {
  render() {
    return (
      <div className="web-search">
        <button className="standard-button inverted-border back-button nav-button" >◀</button>
        <button className="standard-button inverted-border forward-button nav-button" >▶</button>

        <div className="web-search-not-buttons">
          <span className="address-text">Address:</span> <input className="web-search-input oldschool-border" type="text"/>
        </div>
      </div>
    )
  }

}

export default WebSearch

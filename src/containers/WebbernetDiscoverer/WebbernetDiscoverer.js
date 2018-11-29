import React, { Component } from 'react'
import WebSearch from '../../components/WebberNet/WebSearch/WebSearch'
import WebFrame from '../../components/WebberNet/WebFrame/WebFrame'
import WebFooter from '../../components/WebberNet/WebFooter/WebFooter'
import './WebbernetDiscoverer.css'

class WebbernetDiscoverer extends Component {
  render() {
    return(
      <div className="webbernet-container">
        <WebSearch />
        <WebFrame />
        <WebFooter />
      </div>
    )
  }
}

export default WebbernetDiscoverer

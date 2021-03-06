import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Conversation from '../Conversation/Conversation'
import Draggable from 'react-draggable'
import FriendsContainer from '../FriendsContainer/FriendsContainer'
import SettingsContainer from '../SettingsContainer/SettingsContainer'
import About from '../../components/About/About'
import PlasticLove from '../../components/PlasticLove/PlasticLove'
import MustBeSignedInMessage from '../../components/MustBeSignedInMessage/MustBeSignedInMessage'
import WebbernetDiscoverer from '../WebbernetDiscoverer/WebbernetDiscoverer'
import { connect } from 'react-redux'
// import { Resizable } from 'react-resizable'
import { closeWindow, frontWindow } from '../../redux/actions'
import './Window.css'

class Window extends Component {

  state = {width: 450, height: 340, z: 0}

  onResize = (event, {element, size}) => {
    this.setState({width: size.width, height: size.height});
  };

  componentDidMount() {
    // This switch determines the size of the window on mounting
    switch(this.props.name) {
      case 'Sign In':
        this.setState({
          height: 340,
          width: 502
        })
        break;
      case 'Friends List':
        this.setState({
          height: 550,
          width: 250
        })
        break;
      case 'Conversation':
        break;
      case 'Plastic Love':
        this.setState({
          width: 280,
          height: 360
        })
        break;
      case 'WebberNet Discoverer':
        this.setState({
          width: 601,
          height: 601
        })
        break;
      default:
        return null
    }
  }

  moveToFront = () => {
    let newZ = 0
    this.props.windows.forEach(function(w) {
      if(w.z > newZ) {newZ = (w.z + 1)}
    })
    this.props.frontWindow(this.props.id)
    this.setState({z: newZ})
  }

  renderWindow() {
    // This switch determines the type of window rendered
    switch(this.props.name) {
      case 'Sign In':
        return(<Signin />)
      case 'Friends List':
        return(this.props.username ?
          <FriendsContainer /> :
          <MustBeSignedInMessage /> )
      case 'Conversation':
        return(<Conversation data={this.props.data}/>)
      case 'About':
        return(<About/>)
      case 'Plastic Love':
        return(<PlasticLove/>)
      case 'WebberNet Discoverer':
        return(<WebbernetDiscoverer/>)
      case 'Settings':
        return(this.props.username ?
          <SettingsContainer id={this.props.id}/>:
          <MustBeSignedInMessage/>
        )
      default:
        return null
    }
  }

  render() {
    console.log(`${this.props.name} window rendered`)
    return (
        <Draggable
          handle=".handle"
          bounds="body"
          position= {null}
          defaultPosition={{x:100,y:100}}
        >
            <div
              className="window inverted-border clearfix"
              style={{
                width: this.state.width + 'px',
                height: this.state.height + 'px',
                position: 'absolute',
                zIndex: this.state.z
              }}
              onClick={this.moveToFront}
            >
              <div className="bluebar handle"><span className="window-name">
                {(this.props.data && this.props.data.username) ? `Chat with ${this.props.data.username}` : this.props.name}
              </span>
                <button
                  className="standard-button close-window inverted-border"
                  onClick={() => this.props.closeWindow(this.props.id)}
                >X</button>
              </div>
              <>{this.renderWindow()}</>
            </div>
        </Draggable>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    windows: state.windows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: (windowId) => dispatch( closeWindow(windowId) ),
    frontWindow: (windowId) => dispatch( frontWindow(windowId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window)

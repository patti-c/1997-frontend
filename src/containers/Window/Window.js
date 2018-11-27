import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Conversation from '../Conversation/Conversation'
import Draggable from 'react-draggable'
import FriendsContainer from '../FriendsContainer/FriendsContainer'
import { connect } from 'react-redux'
import { Resizable } from 'react-resizable'
import { closeWindow } from '../../redux/actions'
import './Window.css'

class Window extends Component {

  state = {width: 450, height: 340}

  onResize = (event, {element, size}) => {
    this.setState({width: size.width, height: size.height});
  };

  componentDidMount() {
    // This switch determines the size of the window on mounting
    switch(this.props.name) {
      case 'Sign In':
        this.setState({
          height: 340,
          width: 450
        })
        break;
      case 'Friends List':
        this.setState({
          height: 400,
          width: 250
        })
        break;
      case 'Conversation':
        this.setState({})
        break;
      default:
        return null
    }
  }

  renderWindow() {
    // This switch determines the type of window rendered
    switch(this.props.name) {
      case 'Sign In':
        return(<Signin />)
      case 'Friends List':
        return(<FriendsContainer />)
      case 'Conversation':
        return(<Conversation data={this.props.data}/>)
      default:
        return null
    }
  }

  render() {
    return (
        <Draggable
          handle=".handle"
          bounds="body"
          defaultPosition={{x: 200, y: 200}}
          position={null}
        >
            <div
              className="window inverted-border clearfix"
              style={{width: this.state.width + 'px', height: this.state.height + 'px'}}
            >
              <div className="bluebar handle">{this.props.name}
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

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: (windowId) => dispatch( closeWindow(windowId) )
  }
}

export default connect(null, mapDispatchToProps)(Window)


//put directly inside draggable
// <Resizable
//   className="box"
//   height={this.state.height}
//   width={this.state.width}
//   onResize={this.onResize}
//   minConstraints={[450,310]}
// >
//
// </Resizable>

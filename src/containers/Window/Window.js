import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Conversation from '../Conversation/Conversation'
import Draggable from 'react-draggable'
import FriendsContainer from '../FriendsContainer/FriendsContainer'
import About from '../../components/About/About'
import PlasticLove from '../../components/PlasticLove/PlasticLove'
import { connect } from 'react-redux'
// import { Resizable } from 'react-resizable'
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
      case 'About':
        return(<About/>)
      case 'Plastic Love':
        return(<PlasticLove/>)
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
                position: 'absolute'
              }}
            >
              <div className="bluebar handle"><span className="window-name">{this.props.name}</span>
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

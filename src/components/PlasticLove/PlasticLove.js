import React, { Component } from 'react'
import './PlasticLove.css'
import Sound from 'react-sound'
import albumcover from '../../assets/images/plastic-love.png'
import song from '../../assets/sound/plastic_love.mp3'


class PlasticLove extends Component {

  constructor() {
    super()
    this.state = {
      playing: false
    }
  }

  onClick = e => {
    this.setState({
      playing: !this.state.playing
    })
  }

  plasticLove = () => {
    if(this.state.playing) {
      return (
        <Sound
          url={song}
          playStatus={Sound.status.PLAYING}
        />
      )
    } else {
      return (
        <Sound
          url={song}
          playStatus={Sound.status.PAUSED}
        />
      )
    }

  }

  render() {
    return (
      <>
        <img alt="plastic love album cover" className="album-cover oldschool-border" src={albumcover}/>
        <button onClick={this.onClick} className="music-player inverted-border standard-button">
          {this.state.playing ? '❚❚' : '►'}
        </button>
        {this.plasticLove()}
      </>
    )
  }

}

export default PlasticLove

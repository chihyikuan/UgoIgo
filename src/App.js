import React, { Component } from 'react';
import './App.css';
import Todo from './todo'
import Home from './Home'
class App extends Component {
  state = {
    logoClick: false
  }

  handleLogoClick = () => {
    this.setState({
      logoClick: true
    })
    this.playSound()

    setTimeout(() => {
      this.setState({
        logoClick: false
      })
    }, 3000);
  }

  playSound = () => {
    let aud = this.refs.audio
    // let audioCount = 0;
    // let maxAudioCount = 1;
    // aud.onended = () => {
    //   if (audioCount < maxAudioCount - 1) {
    //     aud.play()
    //     audioCount += 1;
    //   } 
    // }
    aud.play()
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className={this.state.logoClick ? "App-logo-click" : "App-logo"} onClick={this.handleLogoClick} />
          <audio ref="audio" >
            <source src="logoSound.wav" type="audio/wav" />
          </audio>
          <h2>Happy Birthday Alisa</h2>
        </div>

        <Home />
      </div>
    );
  }
}

export default App;

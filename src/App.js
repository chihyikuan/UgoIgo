import React, { Component } from 'react';
import './App.css';
import Todo from './todo'
import Home from './Home'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  state = {
    logoClick: false
  }

  componentDidMount() {
    setTimeout(()=>{
      this.handleLogoClick()
    },3000)
  }
  


  handleLogoClick = () => {
    this.setState({
      logoClick: true
    })
    this.playSound()
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
    setTimeout(() => {
      this.setState({
        logoClick: false
      })
    }, 2000);

  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className={this.state.logoClick ? "App-logo-click" : "App-logo"} onClick={this.handleLogoClick} />
          <audio ref="audio">
            <source src="audio/logoSound.mp3" type="audio/mp3" />
          </audio>
          <h2>Happy Birthday Alisa</h2>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo'
import Home from './Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo" />
          <h2>Happy Birthday Alisa</h2>
        </div>
      
        <Home/>
      </div>
    );
  }
}

export default App;

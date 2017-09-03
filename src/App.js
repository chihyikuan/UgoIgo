import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Alisa</h2>
          <div>This is our Todo List</div>
        </div>
      
        <Todo/>
      </div>
    );
  }
}

export default App;

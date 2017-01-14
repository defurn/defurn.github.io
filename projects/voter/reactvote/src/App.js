import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Login</a></li>
            <li className="hidden"><a href="">My Polls</a></li>
          </ul>
        </div>
        <div className="App-header">
          <h2>Voting App</h2><h4>Create and manage custom polls</h4>
        </div>

        <div className="polls">
          <ul>
            <li>poll example</li>
          </ul>
        </div>


      </div>
    );
  }
}

export default App;

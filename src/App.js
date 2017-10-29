import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    title: 'My first todo',
    responsible: 'Sebastian',
    description: 'My first description',
    priority: 'low'
  },
  {
    title: 'My second todo',
    responsible: 'Sebastian',
    description: 'My second description',
    priority: 'low'
  },
  {
    title: 'My third todo',
    responsible: 'Sebastian',
    description: 'My third description',
    priority: 'high'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

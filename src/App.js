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
  },
  {
    title: 'My fourth todo',
    responsible: 'Sebastian',
    description: 'My fourth description',
    priority: 'high'
  }
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge badge-primary">{this.state.todos.length}</span></h4>
      </div>
    );
  }
}

export default App;

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
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.title} <small><span className="label label-info">{todo.priority}</span></small></h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

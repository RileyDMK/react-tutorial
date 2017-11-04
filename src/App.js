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

  removeTodo(index){
    this.setState({
      todos: this.state.todos.filter((e, i) => i !== index)
    })
  }

  render() {
    return (
      <div className="container">
        <TodoInput></TodoInput>
        <hr/>
        <h4>Todo Count: <span className="badge badge-primary">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.title} <span className="badge badge-info">{todo.priority}</span></h4>
              <p>User: {todo.responsible}</p>
              <p>{todo.description}</p>
              <button className="btn btn-danger btn-sm" onClick={this.removeTodo.bind(this, index)}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'Lowest'
    }
  }
  render() {
    return(
      <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handlSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label"></label>
            <div className="col-sm-10">
              <input name="todoTitle"
                     type="text"
                     className="form-control"
                     id="inputTodoTitle"
                     value={this.state.title}
                     onChange={this.handleInputChange}
                     placeholder="Title"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

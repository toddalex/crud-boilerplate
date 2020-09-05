import React, { Component } from 'react';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';
import { Todo } from '../models/todo.model';

interface State {
  todos: Todo[]
};

class Layout extends Component {
  readonly state: State = {
    todos: []
  }

  addTodoHandler = (input: string) => {
    const todoId = Math.random().toString();
    const newTodo: Todo = {
      id: todoId,
      text: input
    }

    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  todoDeleteHandler = (id: string) => {
    let updatedTodos = [...this.state.todos];
    this.setState({ 
      todos: updatedTodos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return(
      <div className="Layout">
       <NewTodo addTodo={this.addTodoHandler}/>
       <TodoList todos={this.state.todos} onDelete={this.todoDeleteHandler}/>
      </div>
    );
  }
};

export default Layout;
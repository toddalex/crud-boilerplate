import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import * as actions from '../store/actions/index';
import NewTodo from '../components/NewTodo/NewTodo';
import TodoList from '../components/TodoList/TodoList';
import { Todo } from '../models/todo.model';


const mapStateToProps = (state: {todos: {todos: Todo[]}}) => ({
  todos: state.todos.todos
})

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string) => dispatch(actions.addTodo(text)),
  deleteTodo: (id: string) => dispatch(actions.deleteTodo(id))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type LayoutProps = PropsFromRedux & {
  todos: Todo[],
  addTodo: (text: string)=> void,
  deleteTodo: (id: string)=> void
}

class Layout extends React.Component<LayoutProps> {
  render() {
    console.log(this.props)
    return(
      <div className="Layout">
       <NewTodo addTodo={this.props.addTodo}/>
       <TodoList todos={this.props.todos} onDelete={this.props.deleteTodo}/>
      </div>
    );
  }
};



export default connector(Layout);
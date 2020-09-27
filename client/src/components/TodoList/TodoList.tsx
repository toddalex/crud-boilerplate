import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import TodoItem from '../Todo/Todo';
import Spinner from '../UI/Spinner/Spinner';
import { TodoState } from '../../models/todo.model';
import * as actions from '../../store/actions/index';
import { TodoActionTypes } from '../../constants/actionTypes';
import './TodoList.css'

const mapStateToProps = (state: {todos: TodoState}) => ({
  todos: state.todos.todos,
  loading: state.todos.loading
})

const mapDispatchToProps = (dispatch: (func: TodoActionTypes)=> void) => ({
  getTodos: () => dispatch(actions.getTodos()),
  deleteTodo: (id: string) => dispatch(actions.deleteTodo(id))
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type TodoListProps = ConnectedProps<typeof connector>;

const TodoList: React.FC<TodoListProps> = React.memo((props) => {
  const { todos, deleteTodo, getTodos, loading } = props;
  console.log('todolist props', props)

  useEffect(() => {
    getTodos()
  }, [getTodos])

  return(
    <div className="todo-list">
      {loading ? <Spinner /> : todos.map(todo => {
         return <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={()=> deleteTodo(todo.id)}/>
       })}
    </div>
  )
});

export default connector(TodoList);

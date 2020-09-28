import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import NewTodo from '../components/NewTodo/NewTodo';
import TodoList from '../components/TodoList/TodoList';
import ErrorModal from '../components/UI/ErrorModal/ErrorModal';
import * as actions from '../store/actions/index';
import { TodoActionTypes } from '../constants/actionTypes';
import { TodoState } from '../models/todo.model';


const mapStateToProps = (state: {todos: TodoState}) => ({
  todos: state.todos.todos,
  loading: state.todos.loading,
  error: state.todos.error
});

const mapDispatchToProps = (dispatch: (func: TodoActionTypes)=> void) => ({
  getTodos: () => dispatch(actions.getTodos()),
  deleteTodo: (id: string) => dispatch(actions.deleteTodo(id)),
  addTodo: (text: string) => dispatch(actions.addTodo(text)),
  clearError: () => dispatch(actions.clearError())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type LayoutProps = ConnectedProps<typeof connector>;

const Layout: React.FC<LayoutProps> = React.memo(props => {
  const { todos, deleteTodo, getTodos, addTodo, clearError, loading, error } = props;
  
  return(
    <div className="Layout">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <NewTodo addTodo={addTodo}/>
      <TodoList 
        todos={todos}
        loading={loading}
        getTodos={getTodos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
});

export default connector(Layout);
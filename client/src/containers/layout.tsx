import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import * as actions from '../store/actions/index';
import { TodoActionTypes } from '../constants/actionTypes'
import NewTodo from '../components/NewTodo/NewTodo';
import TodoList from '../components/TodoList/TodoList';


const mapDispatchToProps = (dispatch: (func: TodoActionTypes)=> void) => ({
  addTodo: (text: string) => dispatch(actions.addTodo(text)),
})

const connector = connect(null, mapDispatchToProps);

type LayoutProps = ConnectedProps<typeof connector>;

const Layout: React.FC<LayoutProps> = React.memo(props => {
  return(
    <div className="Layout">
      <NewTodo addTodo={props.addTodo}/>
      <TodoList />
    </div>
  );
});

export default connector(Layout);
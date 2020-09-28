import React, { useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import './NewTodo.css';
import * as actions from '../../store/actions/index';
import { TodoActionTypes } from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch: (func: TodoActionTypes)=> void) => ({
  addTodo: (text: string) => dispatch(actions.addTodo(text)),
})

const connector = connect(null, mapDispatchToProps);

type NewTodoProps = ConnectedProps<typeof connector>;

const NewTodo: React.FC<NewTodoProps> = React.memo(({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = inputRef.current!.value;
    addTodo(inputText);
  }

  return(
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Create Todo</label>
        <input type="text" id="todo-text" ref={inputRef}/>
        <button type="submit">ADD</button>
      </div>
    </form>
  )
});

export default connector(NewTodo);
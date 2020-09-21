import React, { useRef } from 'react';
import './NewTodo.css'

interface Props {
  addTodo: (input: string) => void;
}

const NewTodo: React.FC<Props> = ({ addTodo }) => {
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
};

export default NewTodo;
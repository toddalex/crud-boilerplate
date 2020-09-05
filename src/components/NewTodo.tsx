import React, { useRef } from 'react';

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
      <label htmlFor="createTodo">Create Todo</label>
      <input type="text" name="createTodo" ref={inputRef}/>
      <button type="submit">ADD</button>
    </form>
  )
};

export default NewTodo;
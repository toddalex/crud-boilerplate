import React from 'react';
import TodoItem from './Todo';
import { Todo } from '../models/todo.model';

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete }) => {
  return(
    <div className="TodoList">
      {todos.map(todo => {
         return <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={()=> onDelete(todo.id)}/>
       })}
    </div>
  )
}

export default TodoList
import React, { useEffect } from 'react';

import TodoItem from '../Todo/Todo';
import Spinner from '../UI/Spinner/Spinner';
import { Todo } from '../../models/todo.model';
import './TodoList.css'


interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  getTodos: ()=> void;
  deleteTodo: (id: string)=> void;
}

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

export default TodoList;

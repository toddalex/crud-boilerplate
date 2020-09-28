import { pool as db } from '../db/config';
import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

export const getTodos: RequestHandler = (req, res, next) => {
  const getTodosQuery = `SELECT * from todos`;
  db.query(getTodosQuery)
  .then((todos: {rows: Todo[]}) => {
    res.json(todos.rows)
  })
  .catch((err: Error) => console.log(err))
}

export const addTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const addTodoQuery = `INSERT INTO todos (text) VALUES ($1) RETURNING *`
  db.query(addTodoQuery, [text])
  .then((todos: {rows: Todo[]}) => {
    res.json(todos.rows[0])
  })
  .catch((err: Error) => console.log(err))
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const id = (req.params as {id: string}).id;
  const deleteTodoQuery = `DELETE FROM todos WHERE id = $1`;
  db.query(deleteTodoQuery, [id])
  .then(() => {
    res.json('todo was deleted!')
  })
  .catch((err: Error) => console.log(err))
}
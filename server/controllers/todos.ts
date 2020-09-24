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
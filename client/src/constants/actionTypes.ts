import { Todo } from '../models/todo.model';

export const GET_TODOS_START = 'GET_TODOS_START';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL';
export const GET_TODOS = 'GET_TODOS';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TEMP_TODO = 'ADD_TEMP_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TEMP_TODO = 'DELETE_TEMP_TODO';

export interface getTodosStart {
  type: typeof GET_TODOS_START
}

export interface getTodosSuccess {
  type: typeof GET_TODOS_SUCCESS
  todos: Todo[]
}

interface getTodos {
  type: typeof GET_TODOS
}

interface addTodoAction {
  type: typeof ADD_TODO 
  text: string
}

export interface addTempTodoAction {
  type: typeof ADD_TEMP_TODO 
  text: string
}

interface deleteTodoAction {
  type: typeof DELETE_TODO
  id: string
}

export interface deleteTempTodoAction {
  type: typeof DELETE_TEMP_TODO
  id: string
}

export type TodoActionTypes = 
  addTodoAction | 
  addTempTodoAction |
  deleteTodoAction | 
  deleteTempTodoAction |
  getTodosStart |
  getTodosSuccess |
  getTodos
import * as actionTypes from '../../constants/actionTypes';
import { Todo } from '../../models/todo.model';

export const getTodosStart = (): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.GET_TODOS_START
  }
}

export const getTodosSuccess = (todos: Todo[]): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    todos: todos
  }
}

export const getTodos = (): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.GET_TODOS
  }
}

export const deleteTodo = (id: string): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  }
}

export const deleteTempTodo = (id: string): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TEMP_TODO,
    id,
  }
}

export const addTodo = (text: string): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO,
    text,
  }
}

export const addTempTodo = (payload: Todo): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.ADD_TEMP_TODO,
    payload,
  }
}


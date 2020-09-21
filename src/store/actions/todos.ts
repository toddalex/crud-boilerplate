import * as actionTypes from '../../constants/actionTypes';

export const deleteTodo = (id: string): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  }
}

export const addTodo = (text: string): actionTypes.TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO,
    text,
  }
}
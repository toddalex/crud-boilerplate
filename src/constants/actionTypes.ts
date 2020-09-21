export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface addTodoAction {
  type: typeof ADD_TODO
  text: string
}

interface deleteTodoAction {
  type: typeof DELETE_TODO
  id: string
}

export type TodoActionTypes = addTodoAction | deleteTodoAction;
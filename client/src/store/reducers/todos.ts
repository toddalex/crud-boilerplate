import * as actionTypes from '../../constants/actionTypes';
import { Todo, TodoState } from '../../models/todo.model';
// import { updateObject } from '../../shared/utils';

const initialState: TodoState = {
  todos: [],
  loading: false
}

const todoReducer = (state = initialState, action: actionTypes.TodoActionTypes): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TEMP_TODO: {
      const todoId = Math.random().toString();
      const newTodo: Todo = {
        id: todoId,
        text: action.text
      }
    
      const updatedTodos = state.todos.slice()
      updatedTodos.push(newTodo);
    
      return {
        ...state,
        todos: updatedTodos
      }
    }
    case actionTypes.DELETE_TEMP_TODO: {
      let newArray = state.todos.slice();
      const updatedArray = newArray.filter(todo => todo.id !== action.id)

      return {
        ...state,
        todos: updatedArray
      }
    }
    case actionTypes.GET_TODOS_START: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.todos,
        loading: false,
      }
    }
    default: return state;
  }
}

export default todoReducer;
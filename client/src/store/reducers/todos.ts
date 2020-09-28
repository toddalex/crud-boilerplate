import * as actionTypes from '../../constants/actionTypes';
import { Todo, TodoState } from '../../models/todo.model';
import { updateObject } from '../../shared/utils';

const initialState: TodoState = {
  todos: [],
  loading: false
};

const addTempTodo = (state = initialState, action: actionTypes.addTempTodoAction): TodoState => {
  
  const newTodo: Todo = {
    id: action.payload.id,
    text: action.payload.text
  };

  const updatedTodos = state.todos.slice()
  updatedTodos.push(newTodo);

  return updateObject(state, {
    todos: updatedTodos
  });
};

const deleteTempTodo = (state = initialState, action: actionTypes.deleteTempTodoAction): TodoState => {
  let newArray = state.todos.slice();
  const updatedArray = newArray.filter(todo => todo.id !== action.id);

  return updateObject(state, {
    todos: updatedArray
  });
};

const getTodosStart = (state = initialState, action: actionTypes.getTodosStart): TodoState => {
  return updateObject(state, {loading: true});
};

const getTodosSuccess = (state = initialState, action: actionTypes.getTodosSuccess): TodoState => {
  return updateObject(state, {
      todos: action.todos,
      loading: false,
  });
};

const todoReducer = (state = initialState, action: actionTypes.TodoActionTypes): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TEMP_TODO: return addTempTodo(state, action);
    case actionTypes.DELETE_TEMP_TODO: return deleteTempTodo(state, action);
    case actionTypes.GET_TODOS_START: return getTodosStart(state, action);
    case actionTypes.GET_TODOS_SUCCESS: return getTodosSuccess(state, action);
    default: return state;
  };
};

export default todoReducer;

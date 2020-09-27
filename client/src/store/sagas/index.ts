import { takeEvery } from 'redux-saga/effects';
import { getTodosSaga, addTodoSaga, deleteTodoSaga } from './todos'
import * as actionTypes from '../../constants/actionTypes';

export function* watchTodo() {
  yield takeEvery(actionTypes.GET_TODOS, getTodosSaga)
  // @ts-ignore
  yield takeEvery(actionTypes.ADD_TODO, addTodoSaga)
  // @ts-ignore
  yield takeEvery(actionTypes.DELETE_TODO, deleteTodoSaga)
}
import * as Effects from 'redux-saga/effects';
import { getTodosSaga, addTodoSaga, deleteTodoSaga } from './todos'
import * as actionTypes from '../../constants/actionTypes';

const takeEvery: any = Effects.takeEvery;

export function* watchTodo() {
  yield takeEvery(actionTypes.GET_TODOS, getTodosSaga)
  yield takeEvery(actionTypes.ADD_TODO, addTodoSaga)
  yield takeEvery(actionTypes.DELETE_TODO, deleteTodoSaga)
}
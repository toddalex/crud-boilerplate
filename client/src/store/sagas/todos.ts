import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';

export function* getTodosSaga() {
  yield put(actions.getTodosStart());
  try {
    const response = yield axios.get('http://localhost:8080/todos')
    yield put (actions.getTodosSuccess(response.data))
  } catch (error) {
    yield console.log(error)
  }
}

export function* addTodoSaga(input: string) {
  try {
    const response = yield axios.post('http://localhost:8080/todos', input)
    yield put (actions.addTempTodo(response.data))
  } catch (error) {
    yield console.log(error)
  }
}

export function* deleteTodoSaga(input: {type: string, id: string}) {
  try {
    const { id } = input;
    yield axios.delete(`http://localhost:8080/todos/${id}`)
    yield put (actions.deleteTempTodo(id))
  } catch(error) {
    yield console.log(error)
  }
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, fork, put, takeLatest, delay } from 'redux-saga/effects';
import {
  addFailure,
  addSuccess,
  deleteFailure,
  deleteSuccess,
  getTodoFailure,
  getTodoSuccess,
  searchFailure,
  searchSuccess,
} from '../actions/todo.action';
import { ADD, DELETE, GET, SEARCH } from '../constants/todo.constant';

function* getTodoSaga(obj) {
  const { onFailure } = obj;
  try {
    yield delay(2000);
    const listTodo = yield call(AsyncStorage.getItem, 'TODO');
    yield put(getTodoSuccess(JSON.parse(listTodo)));
  } catch (error) {
    yield put(getTodoFailure(error));
    onFailure?.(error);
  }
}

function* addTodoSaga(obj) {
  const { onFailure, onSuccess, payload } = obj;
  try {
    let todoList = [];
    const value = yield call(AsyncStorage.getItem, 'TODO');
    if (value !== null) {
      todoList = JSON.parse(value);
    }
    todoList = [...todoList, payload];
    yield call(AsyncStorage.setItem, 'TODO', JSON.stringify(todoList));
    onSuccess?.(todoList);
    yield put(addSuccess(todoList));
  } catch (error) {
    yield put(addFailure(error));
    onFailure?.();
  }
}

function* deleteTodoSaga(obj) {
  const { onFailure, onSuccess, payload } = obj;
  try {
    const todoList = yield call(AsyncStorage.getItem, 'TODO');
    const newList = JSON.parse(todoList).filter(
      todo => todo.title !== payload.title,
    );
    yield call(AsyncStorage.setItem, 'TODO', JSON.stringify(newList));
    onSuccess?.(newList);
    yield put(deleteSuccess(newList));
  } catch (error) {
    yield put(deleteFailure(error));
    onFailure?.();
  }
}

function* searchTodoSaga(obj) {
  const { onSuccess, payload } = obj;

  try {
    const listTodo = yield call(AsyncStorage.getItem, 'TODO');
    const newList = JSON.parse(listTodo).filter(todo =>
      todo.title?.includes(payload),
    );
    onSuccess?.(newList);
    yield put(searchSuccess(newList));
  } catch (error) {
    yield put(searchFailure(error));
  }
}

function* watchTodo() {
  yield takeLatest(ADD.HANDLE, addTodoSaga);
  yield takeLatest(DELETE.HANDLE, deleteTodoSaga);
  yield takeLatest(SEARCH.HANDLE, searchTodoSaga);
  yield takeLatest(GET.HANDLE, getTodoSaga);
}

export default function* rootChild() {
  yield fork(watchTodo);
}

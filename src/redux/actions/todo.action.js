import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD, DELETE, GET, SEARCH } from '../constants/todo.constant';

const getTodoHandle = onFailure => async dispatch => {
  try {
    // await delay(2000);
    const listTodo = await AsyncStorage.getItem('TODO');
    await dispatch(getTodoSuccess(JSON.parse(listTodo)));
  } catch (error) {
    await dispatch(getTodoFailure(error));
    onFailure?.(error);
  }
};
const getTodoSuccess = payload => ({
  type: GET.SUCCESS,
  payload,
});
const getTodoFailure = error => ({
  type: GET.FAILURE,
  error,
});
const addHandle = (payload, onSuccess, onFailure) => async dispatch => {
  try {
    let todoList = [];
    const value = await AsyncStorage.getItem('TODO');
    if (value !== null) {
      todoList = JSON.parse(value);
    }
    todoList = [...todoList, payload];
    await AsyncStorage.setItem('TODO', JSON.stringify(todoList));
    onSuccess?.(todoList);
    dispatch(addSuccess(todoList));
  } catch (error) {
    await dispatch(addFailure(error));
    onFailure?.(error);
  }
};

const addSuccess = payload => ({
  type: ADD.SUCCESS,
  payload,
});
const addFailure = error => ({
  type: ADD.FAILURE,
  error,
});

const deleteHandle = (title, onSuccess, onFailure) => async dispatch => {
  try {
    const todoList = await AsyncStorage.getItem('TODO');
    const newList = JSON.parse(todoList).filter(todo => todo.title !== title);
    await AsyncStorage.setItem('TODO', JSON.stringify(newList));
    onSuccess?.(newList);
    await dispatch(deleteSuccess(newList));
  } catch (error) {
    await dispatch(deleteFailure(error));
    onFailure?.(error);
  }
};

const deleteSuccess = payload => ({
  type: DELETE.SUCCESS,
  payload,
});
const deleteFailure = error => ({
  type: DELETE.FAILURE,
  error,
});

const searchHandle = (payload, onSuccess, onFailure) => async dispatch => {
  try {
    const listTodo = await AsyncStorage.getItem('TODO');
    const newList = JSON.parse(listTodo).filter(todo =>
      todo.title?.includes(payload),
    );
    onSuccess?.(newList);
    await dispatch(searchSuccess(newList));
  } catch (error) {
    await dispatch(searchFailure(error));
    onFailure?.(error);
  }
};
const searchSuccess = payload => ({
  type: SEARCH.SUCCESS,
  payload,
});
const searchFailure = error => ({
  type: SEARCH.FAILURE,
  error,
});

export {
  addHandle,
  addSuccess,
  addFailure,
  deleteHandle,
  deleteSuccess,
  deleteFailure,
  searchHandle,
  searchSuccess,
  searchFailure,
  getTodoHandle,
  getTodoSuccess,
  getTodoFailure,
};

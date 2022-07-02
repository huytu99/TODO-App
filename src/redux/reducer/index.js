import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer';
import todoReducer from './todo.reducer';
const rootReducer = combineReducers({
  todoReducer,
  loading: loadingReducer,
});

export default rootReducer;

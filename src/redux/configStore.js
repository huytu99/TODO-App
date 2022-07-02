import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';
import reducer from './reducer/index';
import thunk from 'redux-thunk';

let middlewares = [];
//const sagaMiddleware = createSagaMiddleware();
// middlewares = [...middlewares, logger, sagaMiddleware];
middlewares = [...middlewares, logger, thunk];

const middleware = applyMiddleware(...middlewares);

const store = createStore(reducer, middleware);
export default store;

// sagaMiddleware.run(rootSaga);

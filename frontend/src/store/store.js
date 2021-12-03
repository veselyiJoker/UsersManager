import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "./saga/saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)

export default store;
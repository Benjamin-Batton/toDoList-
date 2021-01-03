import {Reducer} from '../reducer/mainReducer.js'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger/src";

export const store = createStore(
    Reducer,
    applyMiddleware(thunk,logger),
)
import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import budgetReducer from './reducks/budgetReducer';
import userReducer from './reducks/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    budget: budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
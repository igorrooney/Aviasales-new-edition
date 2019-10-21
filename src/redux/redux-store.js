import { createStore, combineReducers, applyMiddleware } from 'redux';
import ticketsReducer from './tickets-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ store: ticketsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

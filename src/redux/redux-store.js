import { createStore, combineReducers } from 'redux';
import ticketsReducer from './tickets-reducer';

const reducers = combineReducers({ store: ticketsReducer });

const store = createStore(reducers);

export default store;

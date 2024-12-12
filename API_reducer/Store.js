import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { ELecReducer, myReducer } from './Reducer';

export const myStore = createStore(ELecReducer,applyMiddleware(thunk));;
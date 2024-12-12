
import { legacy_createStore as createStore } from 'redux';
import { myReducer } from './CounterReducer';

export const myrStore = createStore(myReducer);
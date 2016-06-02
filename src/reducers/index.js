import { combineReducers } from 'redux';

import {counter} from './counter';
import {inputReducer} from './input';

const rootReducer = combineReducers({
  counter: counter,
  input: inputReducer
});

export default rootReducer;

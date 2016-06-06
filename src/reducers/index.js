import { combineReducers } from 'redux';
import userList from './user_fetch';
import selectedUser from './user_select';
import httpError from './http_error';

const rootReducer = combineReducers({
  userList,
  selectedUser,
  httpError
});

export default rootReducer;

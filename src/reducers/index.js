import { combineReducers } from 'redux';
import userList from './user_fetch';
import selectedUser from './user_select';

const rootReducer = combineReducers({
  userList,
  selectedUser
});

export default rootReducer;

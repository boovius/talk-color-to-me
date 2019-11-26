import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import roomReducer from './room';

export default combineReducers({
  authReducer,
  usersReducer,
  roomReducer,
});

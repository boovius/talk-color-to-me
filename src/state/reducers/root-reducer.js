import { combineReducers } from 'redux';
import authReducer from './auth';
import roomsReducer from './rooms';
import roomReducer from './room';

export default combineReducers({
  authReducer,
  roomsReducer,
  roomReducer,
});

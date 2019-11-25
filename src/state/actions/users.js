import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCEEDED } from '../types/users';

export const getUsersRequested = () => ({
  type: GET_USERS_REQUESTED
});

export const getUsersSucceeded = users => ({
  type: GET_USERS_SUCCEEDED,
  payload: users
});

export const getUsersFailed = error => ({
  type: GET_USERS_FAILED,
  payload: error
});

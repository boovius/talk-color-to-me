import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCEEDED } from '../types/users';

export const initialState = {
  fetching: false,
  fetchError: null,
  users: []
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        fetching: true
      };

    case GET_USERS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        users: payload
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload
      };

    default:
      return state;
  }
};

export default reducer;

import { GET_ROOMS_FAILED, GET_ROOMS_REQUESTED, GET_ROOMS_SUCCEEDED } from '../types/rooms';

export const initialState = {
  fetching: false,
  fetchError: null,
  rooms: []
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_ROOMS_REQUESTED:
      return {
        ...state,
        fetching: true
      };

    case GET_ROOMS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        rooms: payload
      };

    case GET_ROOMS_FAILED:
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

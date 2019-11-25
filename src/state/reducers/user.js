import { LOGOUT_AUTHENTICATED_USER, AUTHENTICATE_USER } from '../types/user';

export const initialState = {
  loggedIn: false,
  user: {
    id: '',
    name: '',
    role: '',
    phone: ''
  }
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: payload,
        loggedIn: true
      };

    case LOGOUT_AUTHENTICATED_USER:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default reducer;

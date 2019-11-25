import { ACTIVATE_NOTIFICATION } from '../types/notification';

export const initialState = {
  text: null,
  type: null,
  active: false
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ACTIVATE_NOTIFICATION:
      return {
        ...state,
        text: payload.text,
        type: payload.type,
        active: true
      };

    default:
      return initialState;
  }
};

export default reducer;

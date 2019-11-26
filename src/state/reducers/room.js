import { SET_ROOM, SET_OWNER_DATA, CLEAR_ROOM } from "../types/room";

const initialState = {
  room: '',
  ownerData: null
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ROOM:
      return {
        ...state,
        room: payload.room
      }
    case SET_OWNER_DATA:
      return {
        ...state,
        ownerData: payload.data
      }
    case CLEAR_ROOM:
      return {...initialState};
    default:
      return state;
  }
}

export default reducer;
import { SET_ROOM, ADD_MESSAGE, SET_OWNER_DATA, CLEAR_ROOM } from "../types/room";

const initialState = {
  roomname: null,
  isRoomOwner: null,
  messages: []
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ROOM:
      return {
        ...state,
        roomname: payload.roomname,
        isRoomOwner: payload.isRoomOwner,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]
      }
    case SET_OWNER_DATA:
      return {
        ...state,
        ownerData: payload
      }
    case CLEAR_ROOM:
      return {...initialState};
    default:
      return state;
  }
}

export default reducer;
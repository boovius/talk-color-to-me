import { SET_ROOM, SET_OWNER_DATA, CLEAR_ROOM } from "../types/room";

export const setRoom = (room) => {
  return {
    type: SET_ROOM,
    payload: {
      room
    }
  };
};

export const setOwnerData = (data) => {
  return {
    type: SET_OWNER_DATA,
    payload: {
      data
    }
  };
};

export const clearRoom = () => {
  return {
    type: CLEAR_ROOM
  };
};

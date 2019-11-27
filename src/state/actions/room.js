import { SET_ROOM, ADD_MESSAGE, SET_OWNER_DATA, CLEAR_ROOM } from "../types/room";

export const setRoom = payload => {
  return {
    type: SET_ROOM,
    payload
  };
};

export const addMessage = payload => {
  return {
    type: ADD_MESSAGE,
    payload
  };
};

export const setOwnerData = payload => {
  return {
    type: SET_OWNER_DATA,
    payload
  };
};

export const clearRoom = () => {
  return {
    type: CLEAR_ROOM
  };
};

import { GET_ROOMS_FAILED, GET_ROOMS_REQUESTED, GET_ROOMS_SUCCEEDED } from '../types/rooms';

export const getRoomsRequested = () => ({
  type: GET_ROOMS_REQUESTED
});

export const getRoomsSucceeded = rooms => ({
  type: GET_ROOMS_SUCCEEDED,
  payload: rooms
});

export const getRoomsFailed = error => ({
  type: GET_ROOMS_FAILED,
  payload: error
});

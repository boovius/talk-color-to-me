import { getRoomsSucceeded, getRoomsFailed } from '../actions/rooms';
import dataFetcherService from '../../services/data-fetcher';

export const fetchRooms = () => {
  return async (dispatch) => {
    console.log('fetching rooms with thunk');
    try {
      const response = await dataFetcherService.getData('http://192.168.1.155:9000/rooms')
      console.log('rooms from server: ', response);
      const rooms = response.data;
      dispatch(getRoomsSucceeded(Object.values(rooms)));
      return rooms;
    } catch (e) {
      dispatch(getRoomsFailed(e))
    }
  }
}
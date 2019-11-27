import { clearRoom } from '../actions/room';
import dataFetcherService from '../../services/data-fetcher';

export const exitRoom = (roomname, isRoomOwner) => {
  return async (dispatch) => {
    console.log('exiting Room');
    try {
      const response = await dataFetcherService.sendData('http://192.168.1.155:9000/exit', {
        roomname, isRoomOwner
      });
      console.log('rooms after exit: ', response);
      dispatch(clearRoom());
      return rooms;
    } catch (e) {
      console.log('exiting room on server failed: ', e);
    }
  }
}
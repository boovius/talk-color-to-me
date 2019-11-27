import io from 'socket.io-client';
import { WS_CONNECT, WS_DISCONNECT, WS_SEND_DATA } from '../types/websocket';

const socketMiddleware = () => {
  let socket;

  return store => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket) {
          break;
        }

        console.log('ws connecting with action: ', action);

        socket = io(`http://192.168.1.155:9000/?username=${action.username}&roomname=${action.roomname}`);

        console.log('socket: ', socket);

        socket.on(action.room, data => {
          store.dispatch(updateOwnerData(data));
        });
        break;
      case WS_SEND_DATA:
        socket.emit(action.room, action.data);
        break;
      case WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      default:
        console.log('state: ', store.getState());
        console.log('action: ', action);
        next(action);
    }
  };
};

export default socketMiddleware;

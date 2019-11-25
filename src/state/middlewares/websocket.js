import io from 'socket.io-client';
import { WS_CONNECT, WS_DISCONNECT } from '../types/websocket';

const socketMiddleware = () => {
  let socket;

  return store => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket) {
          break;
        }

        socket = io(`http://localhost:9000/?username=${action.username}`);

        console.log('socket: ', socket);
        // socket.on(CHAT_REQUEST, task => {
        // });
        break;
      case WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      default:
        next(action);
    }
  };
};

export default socketMiddleware;

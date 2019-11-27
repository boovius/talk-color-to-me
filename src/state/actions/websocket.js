import { WS_CONNECT, WS_DISCONNECT, WS_EMIT_MESSAGE } from '../types/websocket';

export const wsConnect = (username, roomname) => {
  return { type: WS_CONNECT, username, roomname };
};
export const sendData = (room, data) => {
  return { type: WS_SEND_DATA, room, data}
}
export const wsDisonnect = () => {
  return { type: WS_DISCONNECT };
};
export const wsNewMessage = (msg, payload) => {
  return { type: WS_EMIT_MESSAGE, msg, payload };
};

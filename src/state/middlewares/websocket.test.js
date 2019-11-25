import configureMockStore from 'redux-mock-store';
import io from 'socket.io-client';
import { wsConnect, wsDisonnect } from '../actions/websocket';
import config from '../../config';
import websocketMiddleware from './websocket';

describe('state/middlewares/websocket', () => {
  let middleware;

  // --- mock store
  const mockStore = configureMockStore();
  const userId = 'uniqueUserId';
  const store = mockStore({
    tasksReducer: {
      tasks: [],
      taskSelected: {}
    },
    authenticatedUserReducer: {
      user: {
        id: userId,
        name: 'TestUser'
      }
    }
  });

  // --- mock next
  const next = jest.fn();

  // --- mock socket io
  let socket;

  beforeEach(() => {
    middleware = websocketMiddleware();
  });
  afterEach(() => {
    socket = io();
    io.mockClear();
    socket.on.mockClear();
  });

  describe('WS_CONNECT', () => {
    const action = wsConnect(userId);

    it('makes a socket io connection', () => {
      middleware(store)(next)(action);
      const bolideAPIWsConnectUrl = `${config.app.bolideWsUrl}/?userId=${userId}`;
      expect(io).toHaveBeenCalledWith(bolideAPIWsConnectUrl);
    });

    it('sets up a listener for an UPDATED_TASK emission from the API', () => {
      middleware(store)(next)(action);
      const socket = io();
      const mockPayload = { newTask: 'data' };
      const args = socket.on.mock.calls;
      const channel = args[0][0];
      const callback = args[0][1];
      expect(channel).toEqual('UPDATED_TASK');
      callback(mockPayload);
      expect(store.getActions()).toEqual([{ type: 'UPDATE_TASK', payload: mockPayload }]);
    });

    describe('a redundant connect event', () => {
      it('does not setup io a second time', () => {
        const socket = io();
        middleware(store)(next)(action);
        middleware(store)(next)(action);
        expect(socket.on).toHaveBeenCalledTimes(1);
      });
    });

    describe('WS_DISCONNECT', () => {
      const connectAction = wsConnect(userId);

      describe('given already connected', () => {
        beforeEach(() => {
          middleware(store)(next)(connectAction);
        });

        const action = wsDisonnect();

        it('closes the socket', () => {
          const socket = io();
          middleware(store)(next)(action);
          expect(socket.close).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});

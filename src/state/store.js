import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import websocketMiddleware from './middlewares/websocket';
import combinedReducers from './reducers/root-reducer';

const configureStore = () => {
  return createStore(
    combinedReducers,
    applyMiddleware(websocketMiddleware(), thunk),
    composeWithDevTools()
  );
};

export default configureStore;

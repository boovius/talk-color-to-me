import { GET_ROOMS_REQUESTED, GET_ROOMS_SUCCEEDED } from '../types/rooms';
import reducer, { initialState } from './rooms';

describe('state/reducers/rooms', () => {
  it('should return initial state by default', () => {
    expect(reducer()).toEqual(initialState);
  });

  describe('GET_ROOMS_REQUESTED', () => {
    it('sets fetching', () => {
      const result = reducer({ ...initialState }, { type: GET_ROOMS_REQUESTED });
      expect(result).toEqual({ ...initialState, fetching: true });
    });
  });

  describe('GET_ROOMS_SUCCEEDED', () => {
    it('sets fetching and payload', () => {
      const fakeRooms = ['user1', 'user2', 'user3'];
      const result = reducer(
        { ...initialState },
        {
          type: GET_ROOMS_SUCCEEDED,
          payload: fakeRooms
        }
      );
      expect(result).toEqual({ ...initialState, fetching: false, rooms: fakeRooms });
    });
  });
});

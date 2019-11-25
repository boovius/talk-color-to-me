import { GET_USERS_REQUESTED, GET_USERS_SUCCEEDED } from '../types/users';
import reducer, { initialState } from './users';

describe('state/reducers/users', () => {
  it('should return initial state by default', () => {
    expect(reducer()).toEqual(initialState);
  });

  describe('GET_USERS_REQUESTED', () => {
    it('sets fetching', () => {
      const result = reducer({ ...initialState }, { type: GET_USERS_REQUESTED });
      expect(result).toEqual({ ...initialState, fetching: true });
    });
  });

  describe('GET_USERS_SUCCEEDED', () => {
    it('sets fetching and payload', () => {
      const fakeUsers = ['user1', 'user2', 'user3'];
      const result = reducer(
        { ...initialState },
        {
          type: GET_USERS_SUCCEEDED,
          payload: fakeUsers
        }
      );
      expect(result).toEqual({ ...initialState, fetching: false, users: fakeUsers });
    });
  });
});

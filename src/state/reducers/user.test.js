import { LOGOUT_AUTHENTICATED_USER, AUTHENTICATE_USER } from '../types/user';
import reducer, { initialState } from './user';

describe('state/reducers/user.test', () => {
  describe('AUTHENTICATE_USER', () => {
    it('sets fetching and user', () => {
      const fakeUser = {
        id: 123,
        name: 'Ron the Runner',
        phone: '123456789'
      };

      const result = reducer(
        { ...initialState },
        {
          type: AUTHENTICATE_USER,
          payload: fakeUser
        }
      );

      expect(result).toEqual({
        ...initialState,
        user: fakeUser,
        loggedIn: true
      });
    });
  });

  describe('LOGOUT_AUTHENTICATED_USER', () => {
    it('resets authenticated user state', () => {
      const fakeUser = {
        id: 123,
        name: 'Ron the Runner',
        phone: '123456789'
      };

      const result = reducer(
        { ...initialState, ...{ user: fakeUser } },
        {
          type: LOGOUT_AUTHENTICATED_USER
        }
      );

      expect(result).toEqual(initialState);
    });
  });
});

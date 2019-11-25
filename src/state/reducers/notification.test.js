import { ACTIVATE_NOTIFICATION } from '../types/notification';

import reducer, { initialState } from './notification';

describe('src/state/reducers/notification', () => {
  it('should deactivate by default', () => {
    expect(reducer()).toEqual({ ...initialState, active: false });
  });

  describe('ACTIVATE_NOTIFICATION', () => {
    it('sets the text, type, and active state', () => {
      const payload = {
        text: 'Network Error',
        type: 'Error'
      };
      const result = reducer({ ...initialState }, { type: ACTIVATE_NOTIFICATION, payload });
      expect(result).toEqual({
        active: true,
        text: payload.text,
        type: payload.type
      });
    });
  });

  describe('all other actions', () => {
    it('sets notifications to initial state', () => {
      const state = {
        active: true,
        text: 'Error Message',
        type: 'Notification Type'
      };
      const result = reducer({ ...state });
      expect(result).toEqual(initialState);
    });
  });
});

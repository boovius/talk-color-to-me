import { ACTIVATE_NOTIFICATION } from '../types/notification';

export const activateNotification = payload => ({
  type: ACTIVATE_NOTIFICATION,
  ...payload
});

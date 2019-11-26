import { LOGOUT_AUTHENTICATED_USER, AUTHENTICATE_USER } from '../types/auth';

export const authenticateUser = user => ({
  type: AUTHENTICATE_USER,
  payload: user
});

export const logoutAuthenticatedUser = () => ({
  type: LOGOUT_AUTHENTICATED_USER
});

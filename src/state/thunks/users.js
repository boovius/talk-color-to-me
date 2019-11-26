import { getUsersSucceeded, getUsersFailed } from '../actions/users';
import dataFetcherService from '../../services/data-fetcher';

export const fetchMyCounterparts = (username) => {
  return async (dispatch) => {
    console.log('fetching users with thunk');
    try {
      const response = await dataFetcherService.getData('http://localhost:9000/', {username})
      console.log('users from server: ', response);
      dispatch(getUsersSucceeded(response.data));
      return users;
    } catch (e) {
      dispatch(getUsersFailed(e))
    }
  }
}
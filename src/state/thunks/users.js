import { getUsersSucceeded, getUsersFailed } from '../actions/users';

export const fetchUsers = (username) => {
  return function(dispatch) {
    return fetch(`http://localhost:9000/?username=${username}`).then(
      (users) => {console.log('users from server: ', users); dispatch(getUsersSucceeded(users))},
      (error) => { if (error) { dispatch(getUsersFailed(error)) }}
    )
  }
}
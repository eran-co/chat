import * as types from '../constants/actionTypes';
import * as storage from '../utils/localStorage';
import {login as loginRequest} from '../api/authApi';
import { browserHistory } from 'react-router'

export function loginInProgress() {
  return {
    type: types.LOGIN_IN_PROGRESS,
  };
}

export function loginSucceded(token) {
  storage.setItem('token', token);
  return {
    type: types.LOGIN_SUCSSEDED,
    token,
  };
}

export function loginFailed(error) {
  return {
    type: types.LOGIN_FAILED,
    error,
  };
}

export function login(userName, password) {
  return function (dispatch) {
    dispatch(loginInProgress());
    loginRequest(userName, password)
      .then(({token}) => {
        dispatch(loginSucceded(token));
        browserHistory.replace('/');
      })
      .catch(({error}) => dispatch(loginFailed(error)));
  };
}

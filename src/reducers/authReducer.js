import {LOGIN_IN_PROGRESS, LOGIN_SUCSSEDED, LOGIN_FAILED} from '../constants/actionTypes';

export default (state = {isLoginInProgress: false}, action) => {

  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return Object.assign({}, state, {isLoginInProgress: true});

    case LOGIN_SUCSSEDED:
      return Object.assign({}, state, {token: action.token, isLoginInProgress: false});

    case LOGIN_FAILED:
      return Object.assign({}, state, {token: '', loginError: action.error, isLoginInProgress: false});

    default:
      return state;
  }
};

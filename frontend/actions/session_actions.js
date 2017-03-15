import * as APIUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user)
          .then(user => (dispatch(receiveCurrentUser(user))),
                err => dispatch(receiveErrors(err.responseJSON))
          .then(hashHistory.push('/dashboard')))
);

export const logout = () => dispatch => {
  return (
  APIUtil.logout()
          .then(() => (dispatch(receiveCurrentUser(null))),
                err => dispatch(receiveErrors(err.responseJSON))))
          // .then(hashHistory.push('/')));
};

export const signup = user => dispatch => (
  APIUtil.signup(user)
          .then(user => (dispatch(receiveCurrentUser(user))),
                err => dispatch(receiveErrors(err.responseJSON)))
);

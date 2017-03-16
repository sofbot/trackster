import * as APIUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  APIUtil.login(user)
          .then(reUser => (dispatch(receiveCurrentUser(reUser))),
                err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => {
  return (
  APIUtil.logout()
          .then(() => (dispatch(receiveCurrentUser(null))),
                err => dispatch(receiveErrors(err.responseJSON))));
};

export const signup = user => dispatch => (
  APIUtil.signup(user)
          .then(newUser => (dispatch(receiveCurrentUser(newUser))),
                err => dispatch(receiveErrors(err.responseJSON)))
);

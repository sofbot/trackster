import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const ErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorReducer;

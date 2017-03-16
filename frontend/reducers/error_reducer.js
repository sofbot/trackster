import { RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const ErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default ErrorReducer;

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/invite_actions';

import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ALL_USERS:
      const allUsers = action.users.map(user => user['username']);
      return merge({}, state, { allUsers });
    default:
      return state;
  }
};

export default SessionReducer;

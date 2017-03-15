import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
  RECEIVE_ERRORS
} from '../actions/project_actions';

import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  
};

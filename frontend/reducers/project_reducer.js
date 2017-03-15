import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT,
  RECEIVE_ERRORS
} from '../actions/project_actions';

import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      console.log('right!');
      const newProject = { [action.project.id]: action.project };
      return merge({}, state, newProject);
    case RECEIVE_PROJECTS:
      console.log('wrong');
      return action.projects;
    case REMOVE_PROJECT:
      console.log('remove');
      const newState = Object.assign({}, state);
      delete newState[action.project.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default projectReducer;

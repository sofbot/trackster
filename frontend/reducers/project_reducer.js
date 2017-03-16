import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';

import { merge } from 'lodash';

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      const newProject = { [action.project.id]: action.project };
      return merge({}, state, newProject);
    case RECEIVE_PROJECTS:
      action.projects.forEach((project) => (
        newState[project.id] = project
      ));
      return newState;
    case REMOVE_PROJECT:
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;

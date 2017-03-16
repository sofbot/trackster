import {
  RECEIVE_PROJECT,
  RECEIVE_SINGLE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT
} from '../actions/project_actions';

import { merge } from 'lodash';

const _defaultState = {
  title: ''
};

const ProjectReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      const newProject = { [action.project.id]: action.project };
      return merge({}, state, newProject);
    case RECEIVE_SINGLE_PROJECT:
      return action.project;
    case RECEIVE_PROJECTS:
      newState = {};
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

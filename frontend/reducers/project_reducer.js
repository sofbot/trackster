import {
  RECEIVE_SINGLE_PROJECT
} from '../actions/project_actions';

import { merge } from 'lodash';

const _defaultState = {
  title: '',
  stories: []
};

const ProjectReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_PROJECT:
      return action.project.project;
    default:
      return state;
  }
};

export default ProjectReducer;

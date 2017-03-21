import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT
} from '../actions/project_actions';
import { REMOVE_MEMBER } from '../actions/invite_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      const newProject = {
        [action.project.project.id]: action.project.project
      };
      return merge({}, state, newProject);
    case RECEIVE_PROJECTS:
      newState = {};
      action.projects.forEach((project) => (
        newState[project.id] = project
      ));
      return newState;
    case REMOVE_PROJECT:
      delete newState[action.project.id];
      return newState;
    case REMOVE_MEMBER:
      const memberIdx = newState[action.data.projectId]
                          .members.findIndex((member) => (
                            member.id === action.data.memberId
                          ))
      newState[action.data.projectId].members.splice(memberIdx, 1);

      if (newState[action.data.projectId].creator_id !== window.currentUser.id) {
        delete newState[action.data.projectId]
      }

      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;

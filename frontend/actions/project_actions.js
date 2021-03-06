import * as PUtil from '../util/projects_api_util';
import * as InviteUtil from '../util/invite_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_SINGLE_PROJECT = "RECEIVE_SINGLE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveSingleProject = project => ({
  type: RECEIVE_SINGLE_PROJECT,
  project
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const fetchProject = projectId => dispatch => (
  PUtil.fetchProject(projectId)
        .then(project => dispatch(receiveSingleProject(project)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllProjects = () => dispatch => (
  PUtil.fetchAllProjects()
        .then(projects => dispatch(receiveProjects(projects)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const createProject = project => dispatch => (
  PUtil.createProject(project)
        .then(newProject => dispatch(receiveProject(newProject)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateProject = project => dispatch => (
  PUtil.updateProject(project)
        .then(updatedProject => dispatch(receiveProject(updatedProject)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteProject = projectId => dispatch => (
  PUtil.deleteProject(projectId)
        .then(project => dispatch(removeProject(project)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

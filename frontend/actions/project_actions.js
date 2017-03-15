import * as PUtil from '../util/projects_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchProject = projectId => dispatch => (
  PUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)),
        err => dispatch(receiveErrors(err)))
);

export const createProject = project => dispatch => (
  PUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)),
        err => dispatch(receiveErrors(err)))
);

export const updateProject = project => dispatch => (
  PUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)),
        err => dispatch(receiveErrors(err)))
);

export const deleteProject = projectId => dispatch => (
  PUtil.deleteProject(projectId)
        .then(project => dispatch(removeProject(project)),
        err => dispatch(receiveErrors(err)))
);

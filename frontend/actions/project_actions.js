import * as PUtil from '../util/projects_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
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

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchProject = projectId => dispatch => (
  PUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)),
        err => dispatch(receiveErrors(err)))
);

export const fetchAllProjects = () => dispatch => (
  PUtil.fetchAllProjects()
        .then(projects => dispatch(receiveProjects(projects)),
        err => dispatch(receiveErrors(err)))
);

export const createProject = project => dispatch => (
  PUtil.createProject(project)
        .then(newProject => dispatch(receiveProject(newProject)),
        err => dispatch(receiveErrors(err)))
);

export const updateProject = project => dispatch => (
  PUtil.updateProject(project)
        .then(updatedProject => dispatch(receiveProject(updatedProject)),
        err => dispatch(receiveErrors(err)))
);

export const deleteProject = projectId => dispatch => (
  PUtil.deleteProject(projectId)
        .then(project => dispatch(removeProject(project)),
        err => dispatch(receiveErrors(err)))
);

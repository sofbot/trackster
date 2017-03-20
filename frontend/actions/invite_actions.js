import * as IUtil from '../util/invite_api_util';
import { removeProject, receiveProject } from './project_actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchAllUsers = () => dispatch => {
  return (
    IUtil.fetchAllUsers()
          .then(users => dispatch(receiveAllUsers(users)))
  );
};

export const destroyInvite = projectId => dispatch => (
  IUtil.destroyInvite(projectId)
    .then(project => dispatch(removeProject(project)))
);


export const createInvite = invite => dispatch => (
  IUtil.createInvite(invite)
    .then(project => dispatch(receiveProject(project)))
);

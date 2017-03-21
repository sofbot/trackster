import * as IUtil from '../util/invite_api_util';
import { receiveProject } from './project_actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const removeMember = (projectId, memberId) => ({
  type: REMOVE_MEMBER,
  data: {projectId: projectId, memberId: memberId}
});

export const fetchAllUsers = () => dispatch => {
  return (
    IUtil.fetchAllUsers()
          .then(users => dispatch(receiveAllUsers(users)))
  );
};

export const destroyInvite = (projectId, memberId) => dispatch => (
  IUtil.destroyInvite(projectId, memberId)
    .then(() => dispatch(removeMember(projectId, memberId)))
);


export const createInvite = invite => dispatch => (
  IUtil.createInvite(invite)
    .then(project => dispatch(receiveProject(project)))
);

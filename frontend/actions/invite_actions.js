import * as IUtil from '../util/invite_api_util';
import { removeProject, receiveProject } from './project_actions';

export const destroyInvite = projectId => dispatch => (
  IUtil.destroyInvite(projectId)
    .then(project => dispatch(removeProject(project)))
);


export const createInvite = invite => dispatch => {
  IUtil.createInvite(invite)
        .then(project => dispatch(receiveProject(project)));
};

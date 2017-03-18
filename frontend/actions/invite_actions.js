import { receiveErrors } from './session_actions';
import { removeProject, receiveProject } from './project_actions';
import * as InviteUtil from '../util/invite_api_util';

export const userErrors = err => dispatch => {
  debugger;
  return (
    dispatch(receiveErrors(err.responseJSON))
  );
};


// export const destroyInvite = projectId => dispatch => {
//   return (
//     InviteUtil.destroyInvite(projectId)
//     .then(project => dispatch(removeProject(project)),
//     err => dispatch(receiveErrors(err.responseJSON)))
//   );
// };
//
// export const createInvite = invite => dispatch => (
//   InviteUtil.createInvite(invite)
//             .then(project => dispatch(receiveProject(project)),
//                   err => dispatch(receiveErrors(err.responseJson)))
// );

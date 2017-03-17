import * as InviteUtil from '../util/invite_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_INVITE = 'RECEIVE_INVITE';
export const REMOVE_INVITE = 'REMOVE_INVITE';

export const receiveInvite = invite => ({
  type: RECEIVE_INVITE,
  invite
});

export const removeInvite = invite => ({
  type: REMOVE_INVITE,
  invite
});

export const createInvite = invite => dispatch => (
  InviteUtil.createInvite(invite)
            .then(newInvite => dispatch(receiveInvite(newInvite)),
                  err => dispatch(receiveErrors(err.responseJSON)))
);

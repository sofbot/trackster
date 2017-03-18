import { userErrors } from '../actions/invite_actions';

export const createInvite = invite => (
  $.ajax({
    method: 'POST',
    url: '/invites',
    data: { invite }
  })
);

export const destroyInvite = projectId => (
  $.ajax({
    method: 'DELETE',
    url: `/invites/${projectId}`
  })
);

export const fetchUser = username => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`
  })
);

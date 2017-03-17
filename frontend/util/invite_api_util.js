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

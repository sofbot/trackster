export const createInvite = invite => (
  $.ajax({
    method: 'POST',
    url: '/invites',
    data: { invite }
  })
);

export const destroyInvite = id => (
  $.ajax({
    method: 'DELETE',
    url: `/invites/${id}`
  })
);

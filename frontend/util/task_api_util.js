export const createTask = task => (
  $.ajax({
    method: 'POST',
    url: `/tasks`,
    data: { task }
  })
);

export const updateTask = task => (
  $.ajax({
    method: 'PATCH',
    url: `/tasks/${task.id}`,
    data: { task }
  })
);

export const destroyTask = task => (
  $.ajax({
    method: 'DELETE',
    url: `/tasks/${task.id}`
  })
);

export const fetchStory = id => (
  $.ajax({
    method: 'GET',
    url: `/stories/${id}`
  })
);

export const fetchAllStories = project_id => (
  $.ajax({
    method: 'GET',
    url: `/projects/${project_id}/stories`
  })
);

export const createStory = (project_id, story) => (
  $.ajax({
    method: 'POST',
     url: `projects/${project_id}/stories`,
    data: { story }
  })
);

export const updateStory = story => (
  $.ajax({
    method: 'PATCH',
    url: `/stories/${story.id}`,
    data: { story }
  })
);

export const destroyStory = id => (
  $.ajax({
    method: 'DELETE',
    url: `/stories/${id}`
  })
);

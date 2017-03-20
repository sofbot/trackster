export const fetchStory = storyId => (
  $.ajax({
    method: 'GET',
    url: `/stories/${storyId}`
  })
);

export const fetchAllStories = projectId => (
  $.ajax({
    method: 'GET',
    url: `/projects/${projectId}/stories`
  })
);

export const createStory = (projectId, story) => (
  $.ajax({
    method: 'POST',
     url: `projects/${projectId}/stories`,
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

export const destroyStory = storyId => (
  $.ajax({
    method: 'DELETE',
    url: `/stories/${storyId}`
  })
);

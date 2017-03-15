export const fetchAllProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/projects'
  })
);

export const fetchProject = projectId => (
  $.ajax({
    method: 'GET',
    url: `/projects/${projectId}`
  })
);

export const createProject = project => (
  $.ajax({
    method: 'POST',
    url: '/projects',
    data: { project }
  })
);

export const updateProject = project => (
  $.ajax({
    method: 'PATCH',
    url: `/projects/${project.id}`,
    data: { project }
  })
);

export const deleteProject = projectId => (
  $.ajax({
    method: 'DELETE',
    url: `projects/${projectId}`
  })
);

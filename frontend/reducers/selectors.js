const mine = (project, id) => id === project.creator_id;

export const teamProjects = (projects, id) => {
  return projects.filter(project => !mine(project, id));
};

export const myProjects = (projects, id) => {
  return projects.filter(project => mine(project, id));
};

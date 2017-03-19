const mine = project => window.currentUser.id === project.creator_id;

export const teamProjects = projects => {
  return projects.filter(project => !mine(project));
};

export const myProjects = projects => {
  return projects.filter(project => mine(project));
};

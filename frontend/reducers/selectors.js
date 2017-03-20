const mine = (project, id) => id === project.creator_id;


export const IceboxStories = stories => (
  stories.filter(story => story.ice_boxed)
);

export const CurrentStories = stories => {
  return (
    stories.filter(story => (
      !story.ice_boxed && !(story.internal_state === 'done')
    ))
  );
};


export const DoneStories = stories => (
  stories.filter(story => story.internal_state === 'done')
);

export const teamProjects = (projects, id) => {
  return projects.filter(project => !mine(project, id));
};

export const myProjects = (projects, id) => {
  return projects.filter(project => mine(project, id));
};

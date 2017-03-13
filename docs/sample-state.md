`{
  session: {
    currentUser: {
      id: 1,
      username: 'sofbot'
      },
    errors: [],
    invites: {
      1: {
        project: 'projectTitle',
        buddy: 'inviter name',
        state: 'unanswered'
      },
      2: {
        project: 'something about food',
        buddy: 'kate',
        state: 'accepted'
      }
    }
  },
  projects: {
    1: {
      title: 'trackster',
      description: 'cool tracking app',
      creator_id: 1
    }
  },
  members: {
    1: {
      username: 'sofbot'
    }
  },
  stories: {
    1: {
      title: 'deploy to heroku',
      state: 'done',
      type: 'chore',
      description: '',
      ice_boxed: false,
      project_id: 1,
      tasks: {
        1: {
          title: 'style splash page',
          completed: true
        }
      }
    }
  }
}`

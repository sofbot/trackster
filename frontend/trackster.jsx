import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as PActions from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.fetchAllProjects = PActions.fetchAllProjects;
  window.fetchProject = PActions.fetchProject;
  window.createProject = PActions.createProject;
  window.updateProject = PActions.updateProject;
  window.deleteProject = PActions.deleteProject;
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

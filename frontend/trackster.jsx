import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as PUtil from './util/projects_api_util';

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
  window.fetchAllProjects = PUtil.fetchAllProjects;
  window.fetchProject = PUtil.fetchProject;
  window.createProject = PUtil.createProject;
  window.updateProject = PUtil.updateProject;
  window.deleteProject = PUtil.deleteProject;
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

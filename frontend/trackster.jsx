import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as inviteAPI from './util/invite_api_util';
import { fetchProject } from './util/projects_api_util';
import { fetchAllUsers } from './actions/invite_actions';
import { getUsernames } from './reducers/selectors';
import Modal from 'react-modal';

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
  window.store = store;
  window.createInvite = inviteAPI.createInvite;
  window.fetchProject = fetchProject;
  window.fetchAllUsers = fetchAllUsers;
  window.getUsernames = getUsernames;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});

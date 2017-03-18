import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as IActions from './actions/project_actions';
import { fetchUser } from './util/invite_api_util';
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
  window.fetchUser = fetchUser;
  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});

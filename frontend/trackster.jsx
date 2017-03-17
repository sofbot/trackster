import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SActions from './util/story_api_util';
import { clearErrors } from './actions/session_actions';
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
  window.createStory = SActions.createStory;
  window.fetchStory = SActions.fetchStory;
  window.fetchAllStories = SActions.fetchAllStories;
  window.createStory = SActions.createStory;
  window.updateStory = SActions.updateStory;
  window.destroyStory = SActions.destroyStory;
  window.clearErrors = clearErrors;
  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});

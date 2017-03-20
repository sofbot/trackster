import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as StoryUtil from './util/story_api_util';
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
  window.createStory = StoryUtil.createStory;
  window.fetchStory = StoryUtil.fetchStory;
  window.fetchAllStories = StoryUtil.fetchAllStories;
  window.updateStory = StoryUtil.updateStory;
  window.destroyStory = StoryUtil.destroyStory;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});

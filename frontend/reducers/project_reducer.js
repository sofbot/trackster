import { RECEIVE_SINGLE_PROJECT } from '../actions/project_actions';
import {
  RECEIVE_STORY,
  REMOVE_STORY,
  UPDATE_STORY
} from '../actions/story_actions';
import { merge } from 'lodash';

const _defaultState = {
  title: '',
  stories: [],
  members: []
};

const ProjectReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_PROJECT:
      return action.project.project;
    case RECEIVE_STORY:
      newState.stories.push(action.story);
      return merge({}, state, newState);
    case UPDATE_STORY:
      const story = newState.stories.filter(story => story.id === action.story.id)
      let storyIdx = newState.stories.indexOf(story);
      newState.stories.splice(storyIdx, 1);
      newState.stories.push(action.story);
      return merge({}, state, newState);
    case REMOVE_STORY:
      let rmStoryIdx = newState.stories.indexOf(action.story);
      newState.stories.splice(rmStoryIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;

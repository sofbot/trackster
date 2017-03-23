import { RECEIVE_SINGLE_PROJECT } from '../actions/project_actions';
import {
  RECEIVE_STORY,
  REMOVE_STORY,
  UPDATE_STORY
} from '../actions/story_actions';
import {
  RECEIVE_TASK,
  REMOVE_TASK,
  UPDATE_TASK
} from '../actions/task_actions';
import { REMOVE_MEMBER } from '../actions/invite_actions';
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
      newState.stories.push(action.story.story);
      return merge({}, state, newState);
    case UPDATE_STORY:
      let storyIdx = newState.stories.findIndex(story => story.id === action.story.story.id);
      newState.stories[storyIdx] = action.story.story;
      return merge({}, state, newState);
    case REMOVE_STORY:
      let rmStoryIdx = newState.stories.indexOf(action.story.story);
      newState.stories.splice(rmStoryIdx, 1);
      return newState;
    case REMOVE_MEMBER:
      const memberIdx = newState.members.indexOf(action.data.memberId);
      newState.members.splice(memberIdx, 1);
      return newState;
    case RECEIVE_TASK:
      let openStory = newState.stories
                  .filter(story => story.id === action.data.storyId)[0];
      openStory.tasks.push(action.data.task);
      return merge({}, state, newState);
    case UPDATE_TASK:
      openStory = newState.stories
                .filter(story => story.id === action.data.storyId)[0];
      let taskIdx = openStory.tasks.findIndex(task => task.id === action.data.task.id);
      openStory.tasks[taskIdx] = action.data.task;
      return merge({}, state, newState);
    case REMOVE_TASK:
      openStory = newState.stories
                .filter(story => story.id === action.task.story_id)[0];
      taskIdx = openStory.tasks.findIndex(task => task.id === action.task.id);
      openStory.tasks.splice(taskIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;

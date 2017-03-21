import * as SUtil from '../util/story_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

export const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
});

export const receiveUpdate = story => ({
  type: UPDATE_STORY,
  story
});

export const removeStory = story => ({
  type: REMOVE_STORY,
  story
});

export const createStory = (projectId, story) => dispatch => (
  SUtil.createStory(projectId, story)
      .then(newStory => dispatch(receiveStory(newStory)),
            err => dispatch(receiveErrors(err)))
);

export const updateStory = story => dispatch => (
  SUtil.updateStory(story)
        .then(updatedStory => dispatch(receiveUpdate(updatedStory)),
              err => dispatch(receiveErrors(err)))
);
export const destroyStory = storyId => dispatch => (
  SUtil.destroyStory(storyId)
        .then(story => dispatch(removeStory(story)),
              err => dispatch(receiveErrors(err)))
);

import { connect } from 'react-redux';
import StoryIndex from './story-index';
import {
  fetchAllStories,
  fetchStory,
  createStory,
  updateStory,
  destroyStory
} from '../../actions/story_actions';

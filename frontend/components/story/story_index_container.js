import { connect } from 'react-redux';
import StoryIndex from './story_index';
import {
  fetchAllStories,
  fetchStory,
  createStory,
  updateStory,
  destroyStory
} from '../../actions/story_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story)),
  updateStory: story => dispatch(updateStory(story)),
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  fetchAllStories: projectId => dispatch(fetchAllStories(projectId)),
  destoryStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);

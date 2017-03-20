import { connect } from 'react-redux';
import StoryPanel from './story_panel';
import {
  fetchStory,
  createStory,
  updateStory,
  destroyStory
} from '../../actions/story_actions';

const mapStateToProps = state => ({
  stories: state.project.stories
});

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story)),
  updateStory: story => dispatch(updateStory(story)),
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  destoryStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryPanel);

import { connect } from 'react-redux';
import Story from './story';
import {
  fetchStory,
  createStory,
  updateStory,
  destroyStory
} from '../../actions/story_actions';

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story)),
  updateStory: story => dispatch(updateStory(story)),
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  destoryStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  null,
  mapDispatchToProps
)(Story);

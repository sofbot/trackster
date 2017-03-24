import { connect } from 'react-redux';
import Story from './story';
import {
  fetchStory,
  updateStory,
  destroyStory,
  fetchAllStories
} from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
  story: ownProps.story
});

const mapDispatchToProps = dispatch => ({
  fetchAllStories: projectId => dispatch(fetchAllStories(projectId)),
  updateStory: story => dispatch(updateStory(story)),
  destoryStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);

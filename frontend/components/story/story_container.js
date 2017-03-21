import { connect } from 'react-redux';
import Story from './story';
import {
  fetchStory,
  createStory,
  updateStory,
  destroyStory
} from '../../actions/story_actions';


const mapDispatchToProps = dispatch => ({
  updateStory: story => dispatch(updateStory(story)),
  destoryStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  null,
  mapDispatchToProps
)(Story);

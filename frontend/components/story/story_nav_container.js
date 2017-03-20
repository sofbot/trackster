import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryNav from './story_nav';

const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryNav);

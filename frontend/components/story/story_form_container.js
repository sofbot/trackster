import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryForm from './story_form';

const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);

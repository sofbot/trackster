import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryNav from './story_nav';
import { values } from 'lodash';

const mapStateToProps = state => ({
  project: state.project,
  members: state.project.members.map(member => member.username)
});

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId, story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryNav);

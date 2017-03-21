import { connect } from 'react-redux';
import { destroyStory } from '../../actions/story_actions';
import { destroyProject } from '../../actions/project_actions';
import { destroyInvite } from '../../actions/invite_actions';
import DeleteModal from './delete_modal';

const mapDispatchToProps = dispatch => ({
  destroyStory: storyId => dispatch(destroyStory(storyId))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal);

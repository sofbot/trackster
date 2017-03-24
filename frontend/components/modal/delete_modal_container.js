import { connect } from 'react-redux';
import { destroyStory } from '../../actions/story_actions';
import DeleteModal from './delete_modal';

const mapDispatchToProps = dispatch => ({
  destroyStory: storyId => dispatch(destroyStory(storyId)),
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal);

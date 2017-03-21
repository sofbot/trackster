import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps
)(StoryIndex);

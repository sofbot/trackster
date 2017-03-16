import { connect } from 'react-redux';
import Project from './project';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

import { connect } from 'react-redux';
import Project from './project';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: () => dispatch(fetchProject(ownProps.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

import { connect } from 'react-redux';
import { deleteProject } from '../../actions/project_actions';
import DeleteProjectModal from './delete_project';

const mapDispatchToProps = dispatch => ({
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteProjectModal);

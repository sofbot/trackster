import { connect } from 'react-redux';
import ProjectIndexItem from './project_index_item';
import { deleteProject, updateProject } from '../../actions/project_actions';

const mapDispatchToProps = dispatch => ({
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(ProjectIndexItem);

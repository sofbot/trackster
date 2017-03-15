import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import {
  fetchAllProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchProject
} from '../../actions/project_actions';
import { values } from 'lodash';

const mapStateToProps = state => ({
  projects: values(state.projects),
  currentUser: state.session.currentUser
});



const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  createProject: project => dispatch(createProject(project)),
  updateProject: project => dispatch(updateProject(project)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);

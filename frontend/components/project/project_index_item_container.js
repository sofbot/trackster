import { connect } from 'react-redux';
import ProjectIndexItem from './project_index_item';
import { destroyInvite } from '../../actions/invite_actions';
import {
  deleteProject,
  updateProject
} from '../../actions/project_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id
});


const mapDispatchToProps = dispatch => ({
  destroyInvite: projectId => dispatch(destroyInvite(projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);

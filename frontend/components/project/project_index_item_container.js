import { connect } from 'react-redux';
import ProjectIndexItem from './project_index_item';
import { destroyInvitedProject } from '../../actions/invite_actions';
import { teamProjects } from '../../reducers/selectors';
import { values } from 'lodash';
import {
  deleteProject,
  updateProject
} from '../../actions/project_actions';

const mapStateToProps = state => {
  let id = state.session.currentUser.id;
  return ({
    currentUserId: id,
    teamProjects: teamProjects(values(state.projects), id)
  });
};


const mapDispatchToProps = dispatch => ({
  destroyInvitedProject: (projectId, memberId) => (
    dispatch(destroyInvitedProject(projectId, memberId))),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);

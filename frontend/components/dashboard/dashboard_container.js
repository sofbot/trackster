import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createProject } from '../../actions/project_actions';
import { createInvite } from '../../actions/invite_actions';
import { teamProjects } from '../../reducers/selectors';
import { values } from 'lodash';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  teamProjects: teamProjects(values(state.projects))
});

const mapDispatchToProps = dispatch => ({
  createInvite: invite => dispatch(createInvite(invite)),
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

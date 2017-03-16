import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createProject } from '../../actions/project_actions';

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);

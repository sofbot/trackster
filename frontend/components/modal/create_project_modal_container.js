import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import CreateProjectModal from './create_project_modal';


const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateProjectModal);

import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import CreateProjectModal from './create_project_modal';

const mapStateToProps = state => ({
  errors: state.errors
});


const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectModal);

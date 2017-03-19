import { connect } from 'react-redux';
import ProjectIndexItemForm from './project_index_item_form';
import { deleteProject, updateProject } from '../../actions/project_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  updateProject: project => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItemForm);

import { connect } from 'react-redux';
import { updateProject } from '../../actions/project_actions';
import MembersModal from './members_modal';


const mapDispatchToProps = dispatch => ({
  updateProject: project => dispatch(updateProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(MembersModal);

import { connect } from 'react-redux';
import MemberForm from './member_form';
import { fetchAllUsers, destroyInvite } from '../../actions/invite_actions';

const mapStateToProps = (state, ownProps) =>{
debugger
return ({
  usernames: state.session.allUsers,
  currentUser: state.session.currentUser,
  project: ownProps.project
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  destroyInvite: memberId => dispatch(destroyInvite(ownProps.project.id, memberId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberForm);

import { connect } from 'react-redux';
import MemberForm from './member_form';
import { fetchAllUsers } from '../../actions/invite_actions';

const mapStateToProps = state => ({
  usernames: state.session.allUsers
});

export default connect(
  mapStateToProps
)(MemberForm);

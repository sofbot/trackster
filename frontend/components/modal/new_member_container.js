import { connect } from 'react-redux';
import NewMember from './new_member';
import { fetchUser } from '../../util/invite_api_util';


const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username))
});

export default connect(
  null,
  mapDispatchToProps
)(NewMember);

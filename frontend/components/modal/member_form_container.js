import { connect } from 'react-redux';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import { userErrors } from '../../actions/invite_actions';
import { fetchUser } from '../../util/invite_api_util';
import MemberForm from './member_form';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: err => dispatch(receiveErrors(err)),
  userErrors: err => dispatch(userErrors(err)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberForm);

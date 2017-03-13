import AuthForm from './auth_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  handleSignUp: user => dispatch(signup(user))
});


export default connect(
  null,
  mapDispatchToProps
)(AuthForm);

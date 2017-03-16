import AuthForm from './auth_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname === '/signup' ? signup : login);

  return ({
    processForm: user => dispatch(action(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);

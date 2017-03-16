import { connect } from 'react-redux';
import Header from './header';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentLocation: ownProps.location.pathname,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

import { connect } from 'react-redux';
import Splash from './splash';
import { signup } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);

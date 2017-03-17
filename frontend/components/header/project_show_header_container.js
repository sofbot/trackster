import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProjectShowHeader from './project_show_header';

const mapStateToProps = (state, ownProps) => {
  return ({
    project: state.projects

  });
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShowHeader);

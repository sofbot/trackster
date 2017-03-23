import { connect } from 'react-redux';
import TaskForm from './task_form';
import {
  createTask
} from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  story: ownProps.story
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
});

export default connect(
  null,
  mapDispatchToProps
)(TaskForm);

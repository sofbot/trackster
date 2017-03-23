import { connect } from 'react-redux';
import Task from './task';
import {
  updateTask,
  destroyTask
} from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task
});

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task)),
  destroyTask: task => dispatch(destroyTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);

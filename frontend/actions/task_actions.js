import * as TaskUtil from '../util/task_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const receiveTask = (task, storyId) => ({
  type: RECEIVE_TASK,
  data: { task: task, storyId: storyId }
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const receiveUpdate = (task, storyId) => ({
  type: UPDATE_TASK,
  data: { task: task, storyId: storyId }
});

export const createTask = task => dispatch => (
  TaskUtil.createTask(task)
          .then((newTask => dispatch(receiveTask(newTask, newTask.story_id))),
                  err => dispatch(receiveErrors(err)))
);

export const updateTask = task => dispatch => (
  TaskUtil.updateTask(task)
          .then((updatedTask => dispatch(receiveUpdate(updatedTask, updatedTask.story_id))),
                  err => dispatch(receiveErrors(err)))
);

export const destroyTask = task => dispatch => (
  TaskUtil.destroyTask(task)
          .then((destroyedTask => dispatch(removeTask(destroyedTask))),
                  err => dispatch(receiveErrors(err)))
);

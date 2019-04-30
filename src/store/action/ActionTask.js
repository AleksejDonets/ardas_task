import { push } from 'connected-react-router';
import axios from '../../axios';
import {
  LOAD_CURRENT_TASK_ERROR,
  LOAD_CURRENT_TASK,
  LOAD_CURRENT_TASK_SUCCESS,
  EDIT_CURRENT_TASK,
} from './ActionTypes';

export const loadCurrent = () => ({
  type: LOAD_CURRENT_TASK,
  currentTask: {},
  isLoad: false,
});

export const loadCurrentError = error => ({
  type: LOAD_CURRENT_TASK_ERROR,
  currentTask: {},
  isLoad: false,
  error: error,
});

export const loadCurrentSuccess = data => ({
  type: LOAD_CURRENT_TASK_SUCCESS,
  currentTask: data,
  isLoad: true,
});


export function loadCurrentTask(id) {
  return function(dispatch) {
    dispatch(loadCurrent());
    return axios.get (`/tasks/${id}`)
      .then(data => {
        dispatch(loadCurrentSuccess(data.data))
      });
  }
}

export const taskEdit = data => ({
  type: EDIT_CURRENT_TASK,
  newTitle: data,
  isEdit: true,
});

export function editTaskCurrent(titleTask, id) {
  return function(dispatch) {
    dispatch(taskEdit(titleTask));
    return axios.patch(`/tasks/${id}`, {"name": titleTask})
      .then(data => {
        dispatch(loadCurrentSuccess(data.data));
        dispatch(push(`/task/${id}`));
      })
  }
}
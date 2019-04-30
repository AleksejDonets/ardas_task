import axios from '../../axios';
import {
  LOAD_ALL_TASKS_ERROR,
  LOAD_ALL_TASKS,
  LOAD_ALL_TASKS_SUCCESS,
} from './ActionTypes';

export const loadAllTask = () => ({
  type: LOAD_ALL_TASKS,
  isLoad: false,
});

export const loadAllTaskError = error => ({
  type: LOAD_ALL_TASKS_ERROR,
  error,
  isLoad: false,
});

export const loadAllTaskSuccess = data => ({
  type: LOAD_ALL_TASKS_SUCCESS,
  tasks: data,
  isLoad: true,
});

export function loadallTask() {
  return function (dispatch) {
    dispatch(loadAllTask());
    return axios.get('/tasks?_sort=obj_status=true')
      .then(data => dispatch(loadAllTaskSuccess(data.data)))
  };
}
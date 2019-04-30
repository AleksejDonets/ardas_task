import selectedTask, { initialState } from './TaskReducer';
import * as t from '../action/ActionTypes';

describe('test task reducer', () => {
  it('LOAD_ALL_TASKS_SUCCESS', () => {
    const action = {
      type: t.LOAD_CURRENT_TASK_SUCCESS,
    }
    expect(selectedTask(initialState, action)).toEqual({
      currentTask: action.currentTask, 
      isLoad: action.isLoad,
    })
  })
})
import Board, { initialState } from './BoardReducer';
import * as t from '../action/ActionTypes';

describe('test board reducer', () => {
  it('LOAD_ALL_TASKS_SUCCESS', () => {
    const action = {
      type: t.LOAD_ALL_TASKS_SUCCESS,
    }
    expect(Board(initialState, action)).toEqual({
      tasks: action.tasks,
      isLoad: action.isLoad,
    })
  })
})
import { LOAD_ALL_TASKS_SUCCESS } from '../action/ActionTypes';

export const initialState = {
  tasks: [],
  isLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_TASKS_SUCCESS: 
      return  Object.assign({}, state, {tasks: action.tasks, isLoad: action.isLoad});
    default:
      return state;
  }
};

import { LOAD_CURRENT_TASK_SUCCESS } from '../action/ActionTypes';


export const initialState = {
  currentTask: {},
  isLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_TASK_SUCCESS:
      return Object.assign({}, state, {currentTask: action.currentTask, isLoad: action.isLoad });
    default:
      return state;
  }
};

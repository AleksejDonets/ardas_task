import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Board from './BoardReducer';
import selectedTask from './TaskReducer';

export default history => combineReducers({
  router: connectRouter(history),
  Board,
  selectedTask,
});

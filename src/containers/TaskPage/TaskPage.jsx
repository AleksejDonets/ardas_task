import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TaskItem } from '../../components/TaskItem';
import { editTaskCurrent, loadCurrentTask } from '../../store/action';



class TaskPage extends Component {
  static defaultProps = {
    loadTask: PropTypes.func,
    id: PropTypes.string,
    editFunc:PropTypes.func,
    currentTask: PropTypes.object,
    isLoad: PropTypes.bool,
    location: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }

  componentDidMount() {
    const { loadTask, match: { params: { id } } } = this.props;
    loadTask(id);
  }

  handleFocusOut(text) {
    const { editFunc, currentTask: { id } }= this.props;
    editFunc(text, id);
  }
  
  render() {
    const { currentTask, isLoad , location} = this.props;
    if (!isLoad) {
      return (<CircularProgress />);
    }
    return (
      <TaskItem task={currentTask} location={location}/>
    );
  }
}

const mapStateToProps = ({ selectedTask, router }) => ({
  currentTask: selectedTask.currentTask,
  isLoad: selectedTask.isLoad,
  location: router.location.pathname,
});
const mapDispatchToProps = dispatch => ({
  loadTask: id => dispatch(loadCurrentTask(id)),
  editFunc: (title, id) => dispatch(editTaskCurrent(title, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);

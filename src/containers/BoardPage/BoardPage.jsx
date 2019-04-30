import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TaskItem } from '../../components/TaskItem';
import { loadallTask } from '../../store/action';

class BoardPage extends Component {
  static defaultProps = {
    loadTask: PropTypes.func,
    tasks: PropTypes.object,
  };

  componentDidMount() {
    const { loadTask } = this.props;
    loadTask();
  }

  render() {
    const { tasks } = this.props;

    return (
      <Fragment>
        {
          tasks.map(task => (
            <TaskItem  task={task} key={task.id} />
          ))
        }
      </Fragment>
      
    )
  }
};

const mapStateToProps = ({ Board }) =>({
  tasks: Board.tasks,
});

const mapDispatchToProps = disptach => ({
  loadTask: () => disptach(loadallTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);

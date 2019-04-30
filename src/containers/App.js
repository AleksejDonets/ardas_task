import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Header } from '../components/Header';
import { loadallTask } from '../store/action';
import { BoardPage } from './BoardPage';
import { TaskPage } from './TaskPage';

class App extends Component {

  componentDidMount() {
    const { loadTask } = this.props;
    loadTask();
  }

  routeApp = () => {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={ BoardPage } />
            <Route exact  path="/task/:id" component={ TaskPage } />
          </Switch>
        </Fragment>
      </Router >
    )
  }

  render() {
    const { isLoad } = this.props;
    if (!isLoad) {
      return (<CircularProgress />);
    }
    return (
      this.routeApp()
    );
  }
}
const mapDispatchToProps = disptach => ({
  loadTask: () => disptach(loadallTask()),
});

const mapStateToProps = ({ Board }) => ({

  isLoad: Board.isLoad,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
